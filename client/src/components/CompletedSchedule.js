import React from "react";
import CompletedItem from "./CompletedItem"; 
import "./CompletedSchedule.css";
import "./TodoMain.css";
import {FaSearch} from "react-icons/fa";
import TodoControl from "./TodoControl";



const CompletedList = ({todos}) => {    

  const todoarry = todos.todos;

    return (
        <div className="TodoList">
          <div className="completed_title">
            <span >완료된 스케줄</span>
            <FaSearch className="search-icon"color="A5A6F6" size="25"/>
          </div>
          {todoarry.map((todo) => (
            <CompletedItem
            todositem={todo}
              key={todo._id}
            />
          ))}
          <TodoControl/>
        </div>
      );
    
}

export default CompletedList