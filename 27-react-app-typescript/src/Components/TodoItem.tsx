import React from "react";
import classess from "./TodoItem.module.css";
const TodoItem: React.FC<{
  onRemoveTodo: () => void;
  itemKey: string;
  text: string;
}> = (props) => {
  return (
    <li className={classess.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
