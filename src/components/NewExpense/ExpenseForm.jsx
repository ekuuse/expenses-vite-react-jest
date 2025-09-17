import "./ExpenseForm.css";
import React, { Fragment, useRef, useState } from "react";
import Error from '../UI/Error'


const ExpenseForm = (props) => {
  const [error, setError] = useState(null)
  console.log(error)

  const titleInputRef = useRef()
  const amountInputRef = useRef()
  const dateInputRef = useRef()

  const errorHandler = () => {
    setError(null)
  }

  const submitHandler = (event) => {
    const enteredTitle = titleInputRef.current.value
    const enteredAmount = amountInputRef.current.value
    const enteredDate = dateInputRef.current.value

    event.preventDefault();

    if(enteredTitle.trim().length == 0 || enteredAmount.trim().length == 0 || enteredDate.trim().length == 0 ){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid title or amount or date (do not leave any fields empty)'
      })
      return
    }

    const expenseData = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    titleInputRef.current.value = ''
    amountInputRef.current.value = ''
    dateInputRef.current.value = ''
  };

  return (
    <Fragment>
    {error && (
      <Error title={error.title} message={error.message} onConfirm={errorHandler}/>
    )}
    <div>
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title
          <input
            type="text"
            id = "title"
            ref = {titleInputRef}
          />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Price
          <input
            type="number"
            min="0.01"
            step="0.01"
            id = "amount"
            ref = {amountInputRef}
          />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date
          <input
            type="date"
            min="2023-01-01"
            max="2026-01-31"
            id = "date"
            ref = {dateInputRef}
          />
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
        <button type="clear" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
    </div>
    </Fragment>
  );
};

export default ExpenseForm;
