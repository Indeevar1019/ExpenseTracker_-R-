import './ExpenseForm.css';
import React,{useState} from 'react';
const ExpenseForm=(props)=>{
    const [enteredtitle,setEnteredtitle]=useState('');
    const [enteredamount,setEnteredamount]=useState('');
    const [entereddate,setEntereddate]=useState('');
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    const titleChangeHandler=(event)=>{
        setEnteredtitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
            
        // })
        // setUserInput((prevState)=>{//Latest State Snap Shot.
        //     return {...prevState,enteredTitle: event.target.value};
        // });

    };
    const amountChangeHandler=(event)=>{
        setEnteredamount(event.target.value);
    //     setUserInput({
    //         ...userInput,//Spread Operator
    //         enteredAmount: event.target.value,

    // })};
    // setUserInput((prevState)=>{//Latest State Snap Shot.
    //     return {...prevState,enteredAmount: event.target.value};
    // });
};
    const dateHandler=(event)=>{
        setEntereddate(event.target.value);
        // setUserInput((prevState)=>{//Latest State Snap Shot.
        //     return {...prevState,entereddate: event.target.value};
        // });
    };
    //     setUserInput({
    //         ...userInput,
    //         entereddate: event.target.value,

    // })};
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredtitle,
            amount:+enteredamount,
            date: new Date(entereddate)//.toDateString()
        };
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredtitle('');
        setEnteredamount('');
        setEntereddate('');
    };
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" value={enteredtitle} onChange={titleChangeHandler}></input>{/*Two way Binding*/}
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredamount}  onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" value={entereddate}  onChange={dateHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit" >AddExpense</button>
        </div>
    </form>);
}
export default ExpenseForm;