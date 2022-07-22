import React, { useState } from "react";
import Expanses from "./components/Expanses";
import NewExpanses from "./components/NewExpanses";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 27),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [exps, setExp] = useState(DUMMY_DATA);
  const addExpensesHandler = (exp) => {
    setExp((prevExp) => {
      return [exp, ...prevExp];
    });
    console.log(exp);
  };

  return (
    <div>
      <NewExpanses onAddExpHandler={addExpensesHandler}></NewExpanses>
      <Expanses item={exps} />
    </div>
  );
}

export default App;
