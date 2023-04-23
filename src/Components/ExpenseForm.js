import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import './ExpenseForm.css'
function ExpenseForm(props)  { 

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmt] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        console.log('Titlent');
        setEnteredTitle(event.target.value);
    };

    const AmountChangeHandler = (event) => {
        console.log('Amount');
        setEnteredAmt(event.target.value);
    };
    
    const dateChangeHandler = (event) => {
        console.log('datecahanged');
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    };

    const submitHandler=(event) => {
        console.log('ExpenseForm Submit Handler');
        event.preventDefault();
        console.log('After Pressed');
        console.log(enteredDate);
        const expenseData={
            expenseTitle: enteredTitle,
            amount:  enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        props.OnSaveExpenseDatahandler(expenseData);
        setEnteredTitle('');
        setEnteredAmt('');
        setEnteredDate('');


        
    };

    return (
        
        <form onSubmit={submitHandler}>
           
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label className="new-expense__control" >Title</label>
                    <input type='Text' onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label className="new-expense__control">Amount</label>
                    <input type='number' onChange={AmountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label className="new-expense__control">Date</label>
                    <input type='date' onchange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>AddExpenses</button>
            </div>
        </form>


    );

}
export default ExpenseForm;
