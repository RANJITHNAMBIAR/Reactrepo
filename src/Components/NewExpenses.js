

import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props)  => {
   
    const OnSaveExpenseData = (enteredexpensedata) => {

        const enteredexpensedatavalue ={
            ...enteredexpensedata,
            id: Math.random().toString()
        };
        console.log(enteredexpensedatavalue);
        props.onAddExpenses(enteredexpensedatavalue);

    };
    
    
    return (
        <div className="new-expense">
        
        <ExpenseForm OnSaveExpenseDatahandler={OnSaveExpenseData}></ExpenseForm>
        </div>

    );

}
export default NewExpenses;