import React,{useEffect,useState} from 'react';
import TodoMain from "../LandingPage/TodoMain";
import CompletedSchedule from "./CompletedSchedule";
import {
    getTodos,
    NextgetTodos,
  } from "../../../services/TodoService";

const NextLandingPage = () => {
    const [todos, setTodos] = useState({todos:[], currentTodo:""});
    const [nexttodos, setNextTodos] =useState({todos:[]});

    useEffect(() => {
        return getTodos().then(function({data}){
          return NextgetTodos().then(function(nextdata){
            const newcomletedtodos = data.concat(nextdata.data);
            const completedtodos = newcomletedtodos.filter(item => item.completed);
            if(completedtodos.length>5){
              const nextcompletedtods = completedtodos.slice(5,completedtodos.length);
              setNextTodos({todos:nextcompletedtods});
              return setTodos({ todos: nextcompletedtods });
            }
            else{
              return setTodos("");
            }
          })}
          )},[]);
    return (
    <TodoMain>
        <CompletedSchedule todos={nexttodos} completed={false} next={true} completednext={true}/>
    </TodoMain>
  );
};

export default NextLandingPage;