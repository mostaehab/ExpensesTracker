import "./ExpansesItem.css";
import Card from "./Card";
import ExpansesFilter from "./ExpansesFilter";
import { useState } from "react";
import ExpansesList from "./ExpansesList";
import ExpansesChart from "./ExpansesChart";

function Expanses(props) {
  const [filteredYear, setFilterYear] = useState("2020");
  const filterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpanses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <h2>Let's learn reactJS</h2>
      <ExpansesFilter selected={filteredYear} onChangeHandler={filterHandler} />
      <ExpansesChart expense={filteredExpanses} />
      <ExpansesList item={filteredExpanses} />
    </Card>
  );
}

export default Expanses;
