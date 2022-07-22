import React from "react";
import "./ExpansesItem.css";
import ExpansesDate from "./ExpansesDate";
import Card from "./Card";

function ExpansesItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpansesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpansesItem;
