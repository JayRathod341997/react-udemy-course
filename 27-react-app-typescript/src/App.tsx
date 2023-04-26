import Todos from "./Components/Todos";
import Todo from "./models/Todo";
function App() {
  const todo = [new Todo("First Todo object"), new Todo("Second Todo object")];
  return (
    <div>
      <Todos items={todo} />
    </div>
  );
}

export default App;
