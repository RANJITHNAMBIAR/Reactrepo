import React from 'react';
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    const datapointvalues = props.datapoints.map(datapoint => datapoint.value);
    const totalmaximum = Math.max(...datapointvalues);
    console.log('Chart');
    console.log(props.datapoints);
    return <div className='chart'>
        {
            
            props.datapoints.map((datapoint) => (
            <ChartBar 
            key = {datapoint.id}
            value= {datapoint.value} 
            maxvalue={totalmaximum}
            label = {datapoint.label}
            />
            ))
        }

    </div>
};
export default Chart;