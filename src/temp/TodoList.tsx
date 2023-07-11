import { useTodo } from "./useTodo.ts";
import { Todo } from "./type.ts";

function TodoList() {
  const { isLoading, data } = useTodo();
  const todoList: Todo[] = data;

  if (isLoading) {
    return <div>⌛</div>;
  }
  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default TodoList;
