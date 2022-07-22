import React from "react";

function ExpansesFilter(props) {
  const filterHandler = (event) => {
    props.onChangeHandler(event.target.value);
  };

  return (
    <div>
      <div>Filter By Year</div>

      <select value={props.selected} onChange={filterHandler}>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
    </div>
  );
}

export default ExpansesFilter;
