import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';

// Register necessary ChartJS components
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch articles data
  const { data: articles = [], error, isLoading } = useQuery({
    queryKey: ["lineChart"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-articles-user");
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  // Count articles by tags
  const tagCounts = articles.reduce((tagMap, article) => {
    article.tags.forEach(tag => {
      tagMap[tag.value] = (tagMap[tag.value] || 0) + 1;
    });
    return tagMap;
  }, {});

  const allTags = [...new Set(articles.flatMap(article => article.tags.map(tag => tag.value)))];

  // Prepare chart data
  const chartData = {
    labels: allTags, // Dynamic tags as labels
    datasets: [
      {
        label: 'Article Count by Tag',
        data: allTags.map(tag => tagCounts[tag] || 0), // Count for each tag
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Article Count by Tag (Line Chart)',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Tags',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
