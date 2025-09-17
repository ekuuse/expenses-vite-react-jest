import ExpenseItem from "./ExpenseItem";
import React from "react";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <>
      {props.expenses.map((expense) => (
        <ExpenseItem expenseData={expense} key={expense.id} />
      ))}
    </>
  );
};

export default ExpensesList;
