import React from "react";
import CompletedItem from "./CompletedItem"; 
import "./CompletedSchedule.css";
import "./TodoMain.css";



const CompletedList = ({todos}) => {    

  const todoarry = todos.todos;

    return (
        <div className="TodoList">
          {todoarry.map((todo) => (
            <CompletedItem
            todositem={todo}
              key={todo._id}
            />
          ))}
        </div>
      );
    
}

export default CompletedList