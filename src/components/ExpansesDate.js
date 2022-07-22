import "./ExpansesDate.css";

function ExpansesDate(props) {
  const getDayDate = props.date.getDay();
  const getMonthDate = props.date.getMonth();
  const getYear = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{getDayDate}</div>
      <div className="expense-date__month">{getMonthDate}</div>
      <div className="expense-date__year">{getYear}</div>
    </div>
  );
}

export default ExpansesDate;
