import React, { useState ,useEffect } from "react";
import TodoMain from "./components/TodoMain";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import {
  getTodos,
} from "./services/TodoService";

const App = () => {
  const [todos, setTodos] = useState({todos:[], currentTodo:""});

  useEffect(() =>{
    return getTodos().then(function({ data }) {
      setTodos({ todos: data });
    });
  },[]);

  return (

    <TodoMain>
      <TodoInsert/>
      <TodoList todo ={todos.todos} />
    </TodoMain>
  );
};

export default App;
