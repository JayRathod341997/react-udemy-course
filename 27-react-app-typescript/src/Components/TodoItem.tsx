import React from "react";
import classess from "./TodoItem.module.css";
const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li className={classess.item}>{props.text}</li>;
};

export default TodoItem;
