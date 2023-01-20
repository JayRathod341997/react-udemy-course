import "./ExpenseItem.css";
function ExpenseItem() {
  const date = new Date("2022-03-25");

  return (
    <div className="expense-item">
      <div>{date.toISOString()} </div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
