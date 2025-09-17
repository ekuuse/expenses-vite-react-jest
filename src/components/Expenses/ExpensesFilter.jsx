import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const submitFilterChange = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year">Filter by year</label>
        <select id="year" onChange={submitFilterChange}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
