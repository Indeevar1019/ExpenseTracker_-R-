import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const [isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpensedata)=>{
        const expenseData={
            ...enteredExpensedata,
            id:Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler=(event)=>{
        setIsEditing(true);
    };
    const stopEditingHandler=(event)=>{
        setIsEditing(false);
    };
    //const NewExpense=()=>
    return (<div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>AddNewExpense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm> }{/*we can name what ever we want */}
    </div>);

}
export default NewExpense;