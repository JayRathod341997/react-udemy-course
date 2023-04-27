import React from "react";
import classess from "./TodoItem.module.css";
const TodoItem: React.FC<{
  removeTodoItem: (todoId: string) => void;
  itemKey: string;
  text: string;
}> = (props) => {
  const removeTodo = () => {
    props.removeTodoItem(props.itemKey);
    // console.log(props.key);
  };
  return (
    <li className={classess.item} onClick={removeTodo}>
      {props.text},{props.itemKey}
    </li>
  );
};

export default TodoItem;
