import React from 'react';
import './ChartBar.css';
import Chart from './Chart'

const ExpenseChart = props => {
const chartDataPoints =[
    {label:'Jan',value:0},
    {label:'Feb',value:0},
    {label:'Mar',value:0},
    {label:'Apr',value:0},
    {label:'May',value:0},
    {label:'Jun',value:0},
    {label:'Jul',value:0},
    {label:'Aug',value:0},
];
for (const expense of props.expenses){
    const expenseMonth = expense.date.getMonth();
    console.log('expensechart');
    console.log(props.expenses);
    console.log(expenseMonth);
    console.log(expense);
    chartDataPoints[expenseMonth].value += expense.amount;  
}

return <Chart datapoints ={chartDataPoints}/>
};
export default ExpenseChart;