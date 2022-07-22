import React, { useState } from "react";
import "./NewExpanses.css";
import ExpansesForm from "./ExpansesForm";

function NewExpanses(props) {
  const [isEditing, SetIsEditing] = useState(false);

  const expFormHandler = (exp) => {
    const expansesData = { ...exp, id: Math.random() };
    props.onAddExpHandler(exp);
  };

  const EditingIsOn = () => {
    SetIsEditing(true);
  };

  const EditingIsOff = () => {
    SetIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={EditingIsOn}>Add New Expense</button>}

      {isEditing && (
        <ExpansesForm onSubmitForm={expFormHandler} EditingOff={EditingIsOff} />
      )}
    </div>
  );
}

export default NewExpanses;
