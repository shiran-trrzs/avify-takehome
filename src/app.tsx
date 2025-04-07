import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ColumnChart from './components/ColumnChart';
import RadialChart from './components/RadialChart';
import AreaChart from './components/AreaChart';
import './styles.css'

const App = () => {
    type GenerationMixItem = {
        fuel: string;
        perc: number;
    };

    type GenerationData = {
        from: string;
        to: string;
        generationmix: GenerationMixItem[];
    };

    const [data, setData] = useState<GenerationData>({});

    useEffect(() => {
        const resolvedData = async () => {
            try {

                const result = await axios.get("https://api.carbonintensity.org.uk/generation")
                console.log('res', result.data.data);
                setData([result.data.data]);

            } catch (error) {

                console.error("Energy generation data couldn't be obtained", error);

            }
        }

        resolvedData();
    }, [])

    if (!data.length) {
        return <div>Loading...</div>;
    }

    const lastDate = data[0].to.slice(0, 10);
    const lastHour = data[0].to.slice(11, 16);

    const perc = data[0].generationmix.map((item) => item.perc);
    const fuel = data[0].generationmix.map((item) => item.fuel.toUpperCase());

    if (!perc.length) {
        return <div>Loading...</div>;
    }

    console.log('perc', perc);
    return (
        <div className="totalContainer">
            <h1> Last update {lastDate} {lastHour} </h1>
            <section>
            <div className="chartContainer">
                <ColumnChart
                    perc={perc}
                    fuel={fuel}
                />
            </div>
            <div className="chartContainer">
                <RadialChart
                    perc={perc}
                    fuel={fuel}
                />
            </div>
            <div className="chartContainer">
                <AreaChart
                    data={data[0].generationmix}
                />
            </div>
            </section>
        </div>
    )
}

export default App