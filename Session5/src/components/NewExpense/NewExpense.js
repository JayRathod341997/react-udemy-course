import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (enteredSaveExpenseData) => {
    let expenseData = {
      ...enteredSaveExpenseData,
      id: Math.random().toString(),
    };

    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseHandler}
          onClick={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
