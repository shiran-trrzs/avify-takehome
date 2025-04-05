import React, { Component } from "react";
import Chart from "react-apexcharts";

class AreaChart extends Component {
    constructor(props) {
        super(props);

        const dataChart = props.data.map((item) => ({ name: item.fuel, data: [item.perc] }))

        this.state = {

            series: dataChart,
            options: {
                chart: {
                    height: 350,
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
        }
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="area"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AreaChart;