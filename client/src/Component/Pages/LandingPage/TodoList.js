import React from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todo , next}) => {

  const todolist = todo.map(item => <TodoListItem
    todosprop={todo}
    todoitem={item}
    key={item._id}
    next={next}
    />);

  return (
    <div className="TodoList">
      {todolist}      
    </div>
  );
};

export default TodoList;
