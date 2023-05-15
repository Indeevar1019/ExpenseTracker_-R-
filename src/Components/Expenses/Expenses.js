// // import ExpenseItem from './expenseitem';
// // import './Expenses.css';

// // function Expenses(props) {
// //   return (
// //     <div className="expenses">
// //       <ExpenseItem
// //         title={props.items[0].title}
// //         amount={props.items[0].amount}
// //         date={props.items[0].date}
// //       />
// //       <ExpenseItem
// //         title={props.items[1].title}
// //         amount={props.items[1].amount}
// //         date={props.items[1].date}
// //       />
// //       <ExpenseItem
// //         title={props.items[2].title}
// //         amount={props.items[2].amount}
// //         date={props.items[2].date}
// //       />
// //       <ExpenseItem
// //         title={props.items[3].title}
// //         amount={props.items[3].amount}
// //         date={props.items[3].date}
// //       />
// //     </div>
// //   );
// // }

// // export default Expenses;
// import React,{useState} from 'react';
// import ExpenseItem from "./expenseitem";
// import Card from "../UI/Card";
// import './Expenses.css';
// import ExpensesFilter from "./ExpenseFilter";
// function Expenses(props){
//     const [filteredYear,setFilteredYear]=useState('2020');
//     const filterChangeHandler=(selectedYear)=>{
//         //console.log('Expenses.js');
//         setFilteredYear(selectedYear);
//     }
//     return(
//         <div>
//     <Card className="expenses">
//     <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
//     {props.items.map((expense) => 
//     (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>))}
//         {/* <ExpenseItem
//             title={props.items[0].title}
//             amount={props.items[0].amount}
//             date={props.items[0].date}
//         ></ExpenseItem>
//         <ExpenseItem
//             title={props.items[1].title}
//             amount={props.items[1].amount}
//             date={props.items[1].date}
//         ></ExpenseItem>
//         <ExpenseItem
//             title={props.items[2].title}
//             amount={props.items[2].amount}
//             date={props.items[2].date}
//         ></ExpenseItem>
//         <ExpenseItem
//             title={props.items[3].title}
//             amount={props.items[3].amount}
//             date={props.items[3].date}
//     ></ExpenseItem> */}</Card>
//         </div>);

// }
// export default Expenses;

import React, { useState } from 'react';

//import ExpenseItem from './expenseitem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
const filteredExpenses =props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
});
// const result = dup.filter(fnc);
// function fnc(year) {
//   return year =setFilteredYear;
// }
// let expensesContent=<p>No Expenses found.</p>;
// if(filteredExpenses.length>0)
// {
//   expensesContent=filteredExpenses.map((expense,index) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}></ExpenseItem>));

// }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
        {/* {expensesContent} */}
        {/* {props.items.filter()} */}
       {/*props.items.*/}
       {/*anotherway*/}
       {/* {filteredExpenses.length===0 && <p>No Expenses found.</p>}
       {filteredExpenses.length>0 && filteredExpenses.map((expense,index) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            // key={result.id}
            // title={result.title}
            // amount={result.amount}
            // date={result.date}


          />
        ))} */}
       {/* {filteredExpenses.length===0 ? (<p>No Expenses Found.</p>) : (filteredExpenses.map((expense,index) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            // key={result.id}
            // title={result.title}
            // amount={result.amount}
            // date={result.date}


          />
        )))} */}
      </Card>
    </div>
  );
};

export default Expenses;