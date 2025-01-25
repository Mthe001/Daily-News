import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, ArcElement } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, ArcElement);

const RadarChart = () => {
    const axiosPublic = useAxiosPublic();

    // Fetch articles data
    const { data: articles = [] } = useQuery({
        queryKey: ["radarChart"],
        queryFn: async () => {
            const { data } = await axiosPublic.get("/all-articles-user");
            return data;
        }
    });

    // Count articles by tags
    const tagCounts = articles.reduce((tagMap, article) => {
        article.tags.forEach(tag => {
            tagMap[tag.value] = (tagMap[tag.value] || 0) + 1;
        });
        return tagMap;
    }, {});

    // Prepare chart data
    const allTags = ['Entertainment', 'Technology', 'Health', 'Sports', 'Environment', 'Innovation']; // Customize if needed
    const chartData = {
        labels: allTags, // Tags as labels
        datasets: [
            {
                label: 'Article Count by Tag',
                data: allTags.map(tag => tagCounts[tag] || 0), // Count for each tag
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Customize color
                borderColor: 'rgba(255, 99, 132, 1)', // Customize border
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Radar data={chartData} options={options} />
        </div>
    );
};

export default RadarChart;
