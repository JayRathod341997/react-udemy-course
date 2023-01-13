import "./ExpenseItem.css";

function ExpenseItemProp(prop) {
  const title = prop.title;
  const amount = prop.amount;
  const date = prop.date;
  return (
    <div className="expense-item">
      <div>{date.toISOString()} </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItemProp;
