import { useState } from "react";
import ExpensesFilter from "./Components/ExpenseFilter";
import Expenses from "./Components/Expenses";
import NewExpenses from "./Components/NewExpenses";

const DummyexpenseData = [
    {
        id: 'e1',
        expenseTitle: 'Car Insurance',
        amount: 9999,
        date: new Date(2020, 2, 28),
    }, 
    {
        id: 'e2',
        expenseTitle: 'Book Insurance',
        amount: 9999,
        date: new Date(2021, 2, 28),
    },
     {
        id: 'e3',
        expenseTitle: 'Life Insurance',
        amount: 9999,
        date: new Date(2021, 2, 28),
    },
];

function App() {
    const [expense,setexpenses] = useState(DummyexpenseData)

   const addExpenseHandler = expenseData => {
    console.log('before previous expenses')
    console.log(expenseData);
    setexpenses(prevExpensses => {return[expenseData,...expense];});
    
    console.log('In App.js')
    console.log();
   };
    return (
      <div  className="expenses">
        <NewExpenses onAddExpenses={addExpenseHandler}></NewExpenses>
        <Expenses className="expenses" items= {expense}></Expenses>
       </div>
    );
}

export default App;
