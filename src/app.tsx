import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ColumnChart from './components/ColumnChart';
import RadialChart from './components/RadialChart';
import AreaChart from './components/AreaChart';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const resolvedData = async () => {
            try {

                const result = await axios.get("https://api.carbonintensity.org.uk/generation")
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

    return (
        <div>
            <h1> Last update {lastDate} {lastHour} </h1>
            <section>
                <ColumnChart
                    perc={perc}
                    fuel={fuel}
                />
                <RadialChart
                    perc={perc}
                    fuel={fuel}
                />
                <AreaChart
                    data={data[0].generationmix}
                />
            </section>
        </div>
    )
}

export default App