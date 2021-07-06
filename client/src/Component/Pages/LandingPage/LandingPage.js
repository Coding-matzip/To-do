import React, { useState ,useEffect } from "react";
import { withRouter } from "react-router-dom";
import TodoMain from "../LandingPage/TodoMain";
import TodoList from "../LandingPage/TodoList";
import TodoInsert from "../LandingPage/TodoInsert";
import TodoControl from "../LandingPage/TodoControl";
import {
  getTodos,
  NextgetTodos,
} from "../../../services/TodoService";

function LandingPage(props) {
  const [todos, setTodos] = useState({todos:[], currentTodo:""});
  const [prevent,setprevent] = useState("");

  useEffect(() => {
    getTodos().then(function({ data }) {
      setTodos({ todos: data });
    });

    NextgetTodos().then(function({data}){
      setprevent(data.length === 0 ? true : false);
    });  
  }, []);

  // const onClickHandler = () => {
  //   axios.get("/api/users/logout").then((response) => {
  //     if (response.data.success) {
  //       props.history.push("/login");
  //     } else {
  //       alert("로그아웃 실패");
  //     }
  //   });
  // };
  
  return (
    <TodoMain>
      <TodoInsert/>
      <TodoList todo ={todos.todos} />
      <TodoControl prevent={prevent}/>
    </TodoMain>
  );
}

export default withRouter(LandingPage);
