import React,{useEffect,useState} from 'react';
import TodoMain from "../LandingPage/TodoMain";
import TodoList from "../LandingPage/TodoList";
import TodoInsert from "../LandingPage/TodoInsert";
import TodoControl from "../LandingPage/TodoControl";
import {
    NextgetTodos,
  } from "../../../services/TodoService";

const NextLandingPage = () => {
    const [todos, setTodos] = useState({todos:[], currentTodo:""});

    useEffect(() => {
    NextgetTodos().then(function({ data }) {
      setTodos({ todos: data });
    });
  }, []);


    return (
        <TodoMain>
            <TodoInsert/>
                <TodoList todo ={todos.todos} next={true} />
            <TodoControl />
        </TodoMain>
    );
};

export default NextLandingPage;