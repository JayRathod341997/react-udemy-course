import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<{ onRemoveTodo: (id: string) => void; items: Todo[] }> = (
  props
) => {
  const removeItemHanlder = (id: string) => {
    props.onRemoveTodo(id);
  };

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          itemKey={item.id}
          text={item.text}
          removeTodoItem={removeItemHanlder}
        />
      ))}
    </ul>
  );
};

export default Todos;
