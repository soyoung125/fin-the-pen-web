import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCreateTodo } from "./api.ts";

function TodoInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const todoMutation = useMutation({
    mutationFn: fetchCreateTodo,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todo"] }),
  });

  const onClick = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue && inputValue.length > 0) {
      todoMutation.mutate(inputValue);
      inputRef.current.value = "";
    } else {
      alert("too short todo");
    }
  };

  return (
    <div>
      <div>할 일을 입력하세요</div>
      <input type="text" ref={inputRef} />
      <button type="submit" onClick={onClick}>
        등록
      </button>
    </div>
  );
}

export default TodoInput;
