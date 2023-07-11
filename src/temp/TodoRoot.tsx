import TodoList from "./TodoList.tsx";
import TodoInput from "./TodoInput.tsx";

function TodoRoot() {
  return (
    <div>
      <TodoInput />
      <hr />
      <TodoList />
      <hr />
      <TodoList />
      <hr />
    </div>
  );
}

export default TodoRoot;
