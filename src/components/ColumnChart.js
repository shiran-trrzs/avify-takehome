import React from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from 'react-dom';

const ColumnChart = ({ perc, fuel }) => {
    const [state, setState] = React.useState({
        series: [{
            data: perc
        }],
        options: {
            chart: {
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                    }
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: fuel,
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            }
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="bar"
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default ColumnChart;