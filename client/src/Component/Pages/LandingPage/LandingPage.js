import React, { useState ,useEffect } from "react";
import { siteTitle } from "../../Config";
// import axios from "axios";
import { withRouter } from "react-router-dom";
import TodoMain from "../LandingPage/TodoMain";
import TodoList from "../LandingPage/TodoList";
import TodoInsert from "../LandingPage/TodoInsert";
import TodoControl from "../LandingPage/TodoControl";
import {
  getTodos,
  NextgetTodos,
} from "../../../services/TodoService";
import axios from "axios";

function LandingPage(props) {
  const [todos, setTodos] = useState({todos:[], currentTodo:""});
  const [prevent,setprevent] = useState("");

  useEffect(() => {
    // axios.get("/api/hello").then((response) => console.log(response.data));
    // document.title = siteTitle; //Title 변경.
    getTodos().then(function({ data }) {
      setTodos({ todos: data });
    });

    NextgetTodos().then(function({data}){
      setprevent(data.length === 0 ? true : false);
    });  // list가 6개 이상이면 control 버튼 막기
 
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };
  
  return (
    <TodoMain>
      {/* <button onClick={onClickHandler} >logout </button> */}
      <TodoInsert/>
      <TodoList todo ={todos.todos} />
      <TodoControl prevent={prevent}/>
    </TodoMain>
  );
}

export default withRouter(LandingPage);
