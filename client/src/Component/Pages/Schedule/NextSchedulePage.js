import React,{useEffect,useState,withRouter} from 'react';
import TodoMain from "../LandingPage/TodoMain";
import TodoList from "../LandingPage/TodoList";
import TodoInsert from "../LandingPage/TodoInsert";
import TodoControl from "../LandingPage/TodoControl";
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
              // console.log("numcompletedtodos",numcompletedtodos,"nextcompletedtods",nextcompletedtods);
              return setTodos({ todos: nextcompletedtods });
            }
            else{
              return setTodos("");
            }
          })}
          )},[]);
          
    return (
    <TodoMain>
        {/* <TodoInsert/>
          <TodoList todo ={todos.todos} next={true} />
        <TodoControl completed={true}/> */}
        <CompletedSchedule todos={nexttodos} completed={true} next={true} completednext={true}
        nexttodos={[]}/>
    </TodoMain>
  );
};

export default NextLandingPage;