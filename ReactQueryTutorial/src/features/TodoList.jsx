import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/todosApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // invalidate cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(updateTodo, {
    // invalidate cache and refetch the latest data
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    // invalid cache and refetch the latest data
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutation.mutate({ userId: 1, title: newTodo, completed: false });
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = todos.map((todo) => {
      return (
        <article key={todo.id}>
          <div className="todo">
            <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                updateTodoMutation.mutate({
                  ...todo,
                  completed: !todo.completed,
                })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button
            className="trash"
            onClick={() => {
              console.log("test", todo.id);
              deleteTodoMutation.mutate({ id: todo.id });
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </article>
      );
    });
  }

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  );
}
