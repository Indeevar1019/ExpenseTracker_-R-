import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart=(props)=>{
    const dataPointValues=props.dataPoints.map((dataPoint)=>dataPoint.value);
    const totalMaximum=Math.max(...dataPointValues);//max methord needs arguments not array so we need spread(...) operator
    return(<div className="chart">{props.dataPoints.map((dataPoint)=>(
          <ChartBar
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label} ></ChartBar>/* if passing a list must pass key*/
     ))}
    </div>);
};
export default Chart;