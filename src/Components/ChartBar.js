import React from 'react';
import './ChartBar.css'

const ChartBar =(Props) => {
let barFillheight='0%';
console.log('BarFillheight');
console.log(Props.value);
if(Props.value > 0){
    barFillheight = Math.round((Props.value/Props.maxvalue) * 100) + '%';
     console.log('BarFillheightSet');
    console.log(barFillheight);
}
return( 
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style= {{height:barFillheight}}></div>
        </div>
        <div className='chart-bar__label'>{Props.label}</div>
    </div>
);

};
export default ChartBar;