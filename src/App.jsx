import { useEffect, useState } from "react";
import "./App.css";
import { ChangeTheme, Title, TodoForm, TodoItem, Heading } from "./components";
import { TodoContextProvider } from "./context";

function App() {

  const [todos, setTodos] = useState([])

  // addTodo
  const addTodo = (todo) =>{
    setTodos((prevTodo) => [{...todo}, ...prevTodo]);
  }

  // updateTdo 
  const updateTodo = (id, todo) =>{
    setTodos((prevTodo) => prevTodo.map((val) => val.id === id ? todo : val));
  }


  // deleteTodo
  const deleteTodo = (id) =>{
    setTodos((prevTodo) => prevTodo.filter((val) => val.id !== id))
  }


  const toggleCompleted = (id) =>{
    setTodos((prevTodo) => prevTodo.map((val) => val.id === id ? {...val, completed:!val.completed} : val) )
  }





  // UseEffect to getTodos from local storage if any todos are there
  useEffect(()=>{
    let getTodos = JSON.parse(localStorage.getItem('todos'));
    if(getTodos && getTodos.length > 0){
      setTodos(getTodos)
    }
  },[])


  // UseEffect to setTodos to local storage when new todos added
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
      <div className="lg:flex flex-wrap justify-around min-h-screen px-4 py-4 bg-white dark:bg-slate-800">
        <ChangeTheme />
        <Heading />
        <div className="lg:w-[30%] w-full flex items-start mt-[80px] justify-start">
          <Title />
        </div>
        <div className="border lg:w-[60%] w-full mx-auto text-slate-100 lg:px-4 px-3 py-3 lg:py-6 rounded-md border-none lg:shadow-lg lg:shadow-slate-500 dark:lg:shadow-slate-900 font-medium dark:bg-slate-700 dark:text-slate-200 bg-slate-800 mt-[80px]">
            <TodoForm />
        <div className="mt-4 relative">
          {  todos.length == 0 ? <div className="text-lg mx-auto flex items-center justify-center"><p>Please add task to see here</p></div> :  todos.map((todo) =>(
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
