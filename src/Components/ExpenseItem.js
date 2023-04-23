import ExpenseDate from './ExpenseDate';
import React , {useState} from 'react';
import './ExpenseItem.css';
function ExpenseItem(props) {

    const [expenseTitle,setTitle]=useState(props.expenseTitle);
        

    
    const clickhandler = () => {
        setTitle('update');
        console.log('clicked');
    };

    

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2> {props.expenseTitle}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickhandler}>clickherere</button>
        </div>
    );
}

export default ExpenseItem;
