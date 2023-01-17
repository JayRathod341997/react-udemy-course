import ExpenseItemProp from "./ExpenseItemProp";
function Expense(props) {
  let expenses = props.expenses;

  return (
    <div>
      <ExpenseItemProp
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItemProp>
      <ExpenseItemProp
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItemProp>
      <ExpenseItemProp
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItemProp>
      <ExpenseItemProp
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItemProp>
    </div>
  );
}

export default Expense;
