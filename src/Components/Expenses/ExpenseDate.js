//Rendering a Date of the Expense
import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  //const date1=props.date.toString();
  //const year=date1.slice(10,15);
  //console.log(month,day,year);
  //console.log(date1.slice(10,15));
  //const year1=date1.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
// import './ExpenseDate.css'
// function ExpenseDate(props){
//     //const date1=new Date(props.date);
//     //console.log(date1);
//     //console.log(date1.getFullYear());
//     const month=props.date.toLocaleString('en-US',{month:'long'});
//     const day=props.date.toLocaleString('en-US',{day:'2-digit'});
//     const year=props.date.getFullYear();
//     //let year1=props.date.toLocaleString('en-US',{year:'2-digit'});
//     //console.log(year);
//     return(
//         <div className='expense-date'>
//         <div className='expense-date__month'>{month}</div>
//         <div className='expense-date__year'>{year}</div>
//         <div className='expense-date__day'>{day}</div></div>
//     );

// }
// export default ExpenseDate;