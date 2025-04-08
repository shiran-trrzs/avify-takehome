import React from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from 'react-dom';

const AreaChart = ({ generationMix }) => {
    if (!generationMix || generationMix.length === 0) {
        return <div>No data available for the chart</div>;
    }

    const dataChart = generationMix.map((item) => ({ name: item.fuel, data: [item.perc] }))
    
    const [state, setState] = React.useState({
        series: dataChart,
        options: {
            chart: {
                type: 'area'
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    })

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="area"
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default AreaChart;