import { useContext } from "react";
import { createContext } from "react";

// TodoCOntext
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todoMsg:'To-do msg',
            completed: false
        }
    ],
    addTodo:(todoMsg)=>{},
    updateTodo:(id, todoMsg) => {},
    deleteTodo:(id) => {},
    toggleCompleted:(id)=>{}

});


// TodoContextProvider
export const TodoContextProvider = TodoContext.Provider;


// Custom hook useTodo
export const useTodo = () =>{
    return useContext(TodoContext)
}