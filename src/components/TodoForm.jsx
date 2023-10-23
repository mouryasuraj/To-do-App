import React, { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {

  const [todo, setTodo]  = useState('')

  const { addTodo } = useTodo();

  // Fucntio to handleform
  const handleForm = (e) => {
    e.preventDefault();
    if(!todo) return alert('Write something in the field')
    addTodo({id:Date.now(), todo})
    setTodo('');
  };



  return (
    <div>
      <form onSubmit={handleForm} className="flex lg:w-[60%] mx-auto">
        <input
          type="text"
          placeholder="write your task...."
          className="outline-none px-4 w-full py-2 rounded-l-md text-slate-900 dark:text-slate-200 bg-slate-200 dark:bg-slate-800"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="px-2 bg-sky-500 hover:bg-sky-600 duration-200  rounded-r-md">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
