import React from 'react';
import ExpenseItem from './expenseitem';
import './ExpensesList.css';
const ExpensesList=(props)=>{
   // let expensesContent=<p>No Expenses found.</p>;
if(props.items.length===0)
{
  return(<h2 className='expenses-list__fallback'>Found no expenses.</h2>);
}
return (<ul className="expenses-list">
    {props.items.map((expense,index) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}></ExpenseItem>))}
</ul>);


};
export default ExpensesList;