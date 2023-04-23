import './Expeneses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
    const[filteredYear,setSelectedYear]=useState('2020');
    const filteredData = props.items.filter(expense =>{
        return expense.date.getFullYear().toString()=== filteredYear;
    });

    let expenseContent = <p>No expenses Found</p>;

    if (filteredData.length > 0 ){
        expenseContent = filteredData.map((expense) =>(
            <ExpenseItem 
            key ={expense.id}
            expenseTitle={expense.expenseTitle}
            amount={expense.amount}
            date={expense.date}
            />
        ) )
    }
    function OnDatechangeHandler(selectedYear){
        console.log('sfromnewexpense');
        setSelectedYear(selectedYear);
        
      }

    return (
       
        <div className="expenses">
            <h2>Let's get started!</h2>
            <ExpensesFilter defselectedYear={filteredYear} onFilterExpenseDate={OnDatechangeHandler}></ExpensesFilter>
            <ExpenseChart expenses = {filteredData} />
            {expenseContent}
            
        </div>
    );
}

export default Expenses;
