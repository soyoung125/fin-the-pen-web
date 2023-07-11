export const fetchCreateTodo = async (text: string) =>
  fetch("/temp/todo/create", {
    method: "POST",
    body: JSON.stringify({
      text: text,
    }),
  });

export const fetchTodo = () => fetch("/temp/todo").then((res) => res.json());
