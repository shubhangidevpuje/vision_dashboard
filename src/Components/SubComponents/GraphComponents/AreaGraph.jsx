import React from "react";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'
import { color } from "@mui/system";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            
        },
        title: {
            display: true,
            text: 'Line Chart',
            color:"#fff"
        },
    },
};
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderColor: "#2cd9ff"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: true,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderColor: "#0d92ff"
            
        }
    ]
};

export default function AreaGraph() {
    return (
        <div className="AreaGraph">
            <Line options={options} data={data} />
        </div>
    );
}
