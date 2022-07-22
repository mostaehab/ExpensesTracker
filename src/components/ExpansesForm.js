import React, { useState } from "react";
import "./ExpansesForm.css";

function ExpansesForm(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setNewAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setNewDate(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
      id: Math.random(),
    };

    props.onSubmitForm(formData);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={newDate}
            onChange={dateHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={props.EditingOff}>
            Cancel
          </button>
          <button type="submit" onClick={submitForm}>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpansesForm;
