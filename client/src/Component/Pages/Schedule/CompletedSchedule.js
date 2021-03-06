import React,{useState} from "react";
import CompletedItem from "./CompletedItem"; 
import "./CompletedSchedule.css";
import "../LandingPage/TodoMain.css";
import {FaSearch} from "react-icons/fa";
import TodoControl from "../LandingPage/TodoControl";
import SearchModal from "./search";



const CompletedList = ({todos ,completed , nexttodos ,completednext}) => {

  const [SearchOpen, setSearchOpen] = useState("");
  const [SearchValue, setSearchValue] = useState("");

  const OpenSearch = () => {
      setSearchOpen(true);
      setSearchValue("");  
  }
  const CloseSearch = () => {
    setSearchOpen(false);   
      
  }
   const GetSearchValue = (SearchValue) => {
    setSearchValue(SearchValue);
  }
  const todoarry = todos.todos;

  let searchArr = todoarry.filter(it => it.todo.includes(SearchValue));

    return (
      <>
      <div className="PageHeader" >
          <h2 className="Pagetitle">완료된 스케줄</h2>
            <div className="search flex flex-ai-c" onClick={OpenSearch}>
                <FaSearch></FaSearch>
            </div>
        </div>

        <div className="TodoList">
         {(SearchOpen && SearchValue !== "") ?             
          (
            searchArr.map((todo) => (
              <CompletedItem
              todositem={todo}
              key={todo._id}
              />
              ))  
          ) :             
         (
           todoarry.map((todo) => (
            <CompletedItem
            todositem={todo}
            key={todo._id}
            />
            ))           
          )}    
          </div>
        <TodoControl completed={
          completednext ? true : false
        } prevent={
          completed ? nexttodos.todos.length === 0 ? true : false 
        :
          todos.todos.length === 0 ? true : false }/>
        <SearchModal SearchValue={GetSearchValue} open = {SearchOpen} close = {CloseSearch}></SearchModal>
      {/* 자식 -> 부모로 prop 전달을 시키려 했는데 맞는지 모르겠네요.. https://technicolour.tistory.com/56 여기를 참고했습니다. */}
      </>
    ); 
    
}

export default CompletedList