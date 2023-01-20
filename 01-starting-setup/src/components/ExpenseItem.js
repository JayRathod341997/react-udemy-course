import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
function ExpenseItem(prop) {
  const title = prop.title;
  const amount = prop.amount;
  const date = prop.date;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
