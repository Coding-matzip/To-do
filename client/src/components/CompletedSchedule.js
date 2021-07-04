import React,{useState} from "react";
import CompletedItem from "./CompletedItem"; 
import "./CompletedSchedule.css";
import "./TodoMain.css";
import {FaSearch} from "react-icons/fa";
import TodoControl from "./TodoControl";
import SearchModal from "./search";



const CompletedList = ({todos}) => {

  const [SearchOpen, setSearchOpen] = useState(false);
  const [SearchValue, setSearchValue] = useState("");

  const OpenSearch = () => {
      setSearchOpen(true);
      setSearchValue("");  
      // searchvalue 값 초기화
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
            <div className="search" onClick={OpenSearch}>
                <FaSearch></FaSearch>
            </div>
        </div>

        <div className="TodoList">
         {(SearchOpen && SearchValue !== "") ? 
           // 검색창이 띄워지고 입력된 값이 있을 때, 검색 결과를 나열합니다.               
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
        <TodoControl/>
          <SearchModal SearchValue={GetSearchValue} open = {SearchOpen} close = {CloseSearch}></SearchModal>
      {/* 자식 -> 부모로 prop 전달을 시키려 했는데 맞는지 모르겠네요.. https://technicolour.tistory.com/56 여기를 참고했습니다. */}
      </>
    ); 
    
}

export default CompletedList