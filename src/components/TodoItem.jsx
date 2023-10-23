import React, { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isEditable, setIsEditalbe] = useState(false);
  const [checkbox, setCheckbox] = useState(false)

  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  // Function to editTodo
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditalbe((prev) => !prev);
  };

    // Fucntion to handle checkbox
    const handleCheck = () => {
        setCheckbox((prev) => !prev)
        toggleCompleted(todo.id)
    }



  return (
    <div className="mt-2 flex gap-x-2 lg:w-[70%] w-full mx-auto rounded-lg ">
      <div className={`w-full flex ${checkbox ? 'bg-green-200 text-slate-800' : ' bg-gray-500 text-slate-100'}   px-2`}>
        {/* Checkbox input */}
        <input type="checkbox" defaultChecked={checkbox} onChange={handleCheck} />
      {/* Todo Msg Input */}
        <input
          type="text"
          className={`px-2  py-2 w-full  block ${checkbox ? 'line-through' : ""} outline-none bg-transparent`}
          value={todoMsg}
          readOnly={!isEditable}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
      </div>
      {/* Edit or save btn */}
      <button
        onClick={editTodo}
        className={`px-2 bg-slate-200 `}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Btn */}
      <button onClick={() => deleteTodo(todo.id)} className="px-2 bg-slate-200">
      ❌
      </button>
    </div>
  );
}

export default TodoItem;
