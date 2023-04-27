import { FormEvent } from "react";
import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputTextRef.current!.value;
    if (enteredText.length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
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
