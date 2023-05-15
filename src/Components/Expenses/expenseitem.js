import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card></li>
  );
}
export default ExpenseItem;
// import React,{useState} from 'react';
// import './ExpenseItem.css';
// import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card';
// //import ExpensesFilter from './ExpensesFilter';

// function ExpenseItem(props) {
//     // const month=props.date.toLocaleString('en-US',{month:'long'});
//     // const day=props.date.toLocaleString('en-US',{day:'2-digit'});
//     // const year=props.date.getFullYear();
//     const [title,setTitle]=useState(props.title);//used for state changes.
//     const clickHandler=()=>{
//       setTitle('Updated!');
//       //console.log('Clicked!')
//       console.log(title);
//     }
//   return (
//     <div>
//     <Card className='expense-item'>
//          <ExpenseDate date={props.date}></ExpenseDate>
//       {/* <div>
//         <div>Month:{month}</div>
//         <div>Year:{year}</div>
//         <div>Date:{day}</div></div> */}
//       <div className='expense-item__description'>
//         <h2>{title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>ChangeTitle</button>
//     </Card>
//     </div>
//   );
// }

// export default ExpenseItem;