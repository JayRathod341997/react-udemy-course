import { FormEvent } from "react";
import { useRef } from "react";
const NewTodo = () => {
  const todoInputTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputTextRef.current!.value;
    if (enteredText.length === 0) {
      return;
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Enter new Todo</label>
      <input type="text" id="text" ref={todoInputTextRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
