import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React from "react";

function ExpenseItem(prop) {
  const amount = prop.amount;
  const date = prop.date;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{prop.title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
