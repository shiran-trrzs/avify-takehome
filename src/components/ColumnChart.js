import React, { Component } from "react";
import Chart from "react-apexcharts";

class ColumnChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                data: props.perc
            }],
            options: {
                chart: {
                    height: 350,
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
                    categories: props.fuel,
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    }
                }
            },

        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ColumnChart;