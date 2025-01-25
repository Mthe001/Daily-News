// RadarChart.js
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RadarChart = () => {
    const data = {
        labels: ['Sales', 'Marketing', 'Development', 'Customer Support', 'Analytics', 'Design'], // Example categories
        datasets: [
            {
                label: 'Department Performance',
                data: [85, 92, 80, 75, 70, 90], // Example values for the categories
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
                borderColor: 'rgba(54, 162, 235, 1)', // Darker blue
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            r: {
                angleLines: {
                    display: false,
                },
                suggestedMin: 0,
                suggestedMax: 100,
            },
        },
    };

    return <Radar data={data} options={options} />;
};

export default RadarChart;
