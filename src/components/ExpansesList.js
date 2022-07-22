import React from "react";
import "./ExpansesList.css";
import ExpansesItem from "./ExpansesItem";

const ExpansesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpansesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpansesList;
