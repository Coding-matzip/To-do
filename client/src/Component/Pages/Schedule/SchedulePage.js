import React, { useState, useEffect } from "react";
import CompletedSchedule from "./CompletedSchedule";
import {getTodos,NextgetTodos} from "../../../services/TodoService";

function SchedulePage() {

    const [todos, setTodos] = useState({todos:[], currentTodo:""});
    const [nexttodos, setNextTodos] =useState({todos:[]});
    useEffect(() => {
      return getTodos().then(function({data}){
        return NextgetTodos().then(function(nextdata){
          const newcomletedtodos = data.concat(nextdata.data);
          const completedtodos = newcomletedtodos.filter(item => item.completed);
          if(completedtodos.length>5){
            const numcompletedtodos = completedtodos.slice(0,5);
            const nextcompletedtods = completedtodos.slice(5,completedtodos.length);
            setNextTodos({todos:nextcompletedtods});
            setTodos({ todos: numcompletedtodos });
          }
          else{
            return setTodos({ todos: completedtodos });
          }
          })}
      )},[]);
    return (
        <div className ="TodoMain">
            <CompletedSchedule todos={todos} completed={true} nexttodos={nexttodos} completednext={true} />
        </div>  
    )
}

export default SchedulePage;


