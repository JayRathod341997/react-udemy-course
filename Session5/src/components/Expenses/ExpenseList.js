import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenses = props.expense;
  if (expenses.length == 0) {
    return <h2 className="expenses-list__fallback">Found no expenses !</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.key}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
