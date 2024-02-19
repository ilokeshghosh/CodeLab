import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import todo from "./apiService/todo";
import { setTodo } from "./store/todoSlice";
import { useDispatch } from "react-redux";

function App() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", todo.getTodoList,{
    onSuccess:(todos)=>{
      dispatch(setTodo(todos))
    }
  });

  const addTodoMutation = useMutation(todo.addTodo, {
    onSuccess: () => {
      alert("todo added");
      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(todo.updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      alert("todo updated");
    },
  });

  const deleteTodoMutation = useMutation(todo.deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      alert("todo deleted");
    },
  });

  useEffect(() => {
    // dispatch(setTodo(todos));
    console.log('hi therere',todos)
  }, [todos]);

  function submit(data) {
    addTodoMutation.mutate(data);
    setValue("title", "");
    setValue("description", "");
    setValue("due_data");
    setValue("priority", "default");
  }

  if (isLoading) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <>
        {/* wrapper */}
        <div className="w-full h-screen bg-slate-400">
          {/* upper container /form  */}
          <div className="w-[80%] flex justify-center items-center  mx-auto">
            <form
              className="flex flex-col justify-center items-center py-10 gap-4 w-full"
              onSubmit={handleSubmit(submit)}
            >
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Title"
                className="outline-none w-[40%] py-2 px-3 rounded-xl"
                {...register("title", { required: true })}
              />

              <input
                type="text"
                name="description"
                id="description"
                className="outline-none w-[40%] py-2 px-3 rounded-xl"
                placeholder="Enter Description"
                {...register("description", { required: true })}
              />

              <input
                type="date"
                name="due_date"
                id="due_date"
                className="outline-none w-[40%] py-2 px-3 rounded-xl"
                {...register("due_data", { required: true })}
              />

              <select
                name="priority"
                id="priority"
                className="outline-none w-[40%] py-2 px-3 rounded-xl"
                defaultValue={"default"}
                {...register("priority", { required: true })}
              >
                <option value="default" disabled hidden>
                  Choose Priority
                </option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <input
                type="submit"
                value="Add Todo"
                className="outline-none w-[40%] py-2 px-3 bg-green-400 rounded-xl cursor-pointer"
              />
            </form>
          </div>

          {/* lower container / display todos */}
          <div className="w-[80%] flex flex-col justify-center items-center mx-auto gap-5 py-4">
            {todos.map((todo, index) => (
              <div
                className="w-[40%] flex justify-between items-center px-4 h-10 rounded-xl bg-white font-bold font-serif text-xl"
                key={index}
              >
                <h1>{todo.title}</h1>
                <MdDelete
                  onClick={() => deleteTodoMutation.mutate(todo.id)}
                  className="text-2xl text-red-400 font-bold"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
