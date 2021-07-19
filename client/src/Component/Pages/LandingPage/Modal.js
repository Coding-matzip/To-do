import React, { useState,useEffect } from "react";
import "./Modal.css";
import {
  updataeTodos,
  addTodos,
  getTodos,
} from "../../../services/TodoService";
import { AiOutlineClose } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale";
import moment from 'moment';

const Modal = (props) => {
  const { open, close, header,id} = props;
  const [todos, setTodos] = useState({todos:[], currentTodo:""});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() =>{
    return getTodos().then(function({ data }) {
      setTodos({ todos: data });
    });
  },[]);

  const handleChange = (e) => {
    setTodos({ currentTodo: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
        const { data } = await addTodos({ todo: todos.currentTodo , 
          startdate: moment(startDate).format("YYYY-MM-DD"), enddate: moment(endDate).format("YYYY-MM-DD") });
        setTodos(data);
        setTodos({ todos, currentTodo: "" });
    } catch (error) {
        console.log(error);
    }
  };

  

  const handletextupdate = async (id) => {
    try{
          const index = todos.todos.findIndex((task) => task._id === id); //index를 반환함
          todos.todos[index] = { ...todos[index] };
          todos.todos[index].todo = 
          setTodos({ todos });
          await updataeTodos(id, {
            todo: todos.todos[index].todo,
          });
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <div className="modal_main"  >
          <button className="close" onClick={close}>
            <AiOutlineClose size="31" color="white"/>
          </button>
          <header className="modal_header">{header}</header>
          <form className="modal_input_main" >
            <div>
              시작 날짜
              <DatePicker
              id="datePicker-start"
              dateFormat="yyyy/MM/dd"
              selected={startDate} 
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              locale={ko}
              minDate={new Date()}
              />
            </div>
            <div>
              종료 날짜
              <DatePicker 
              id="datePicker-end"
              dateFormat="yyyy/MM/dd"
              selected={endDate} 
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              locale={ko}
              />
            </div>
            {/* <div className="Date-wrap flex flex-jc-c flex-ai-c">
            <div className="startDate-wrap">
              <div className="element label">
                <label htmlFor="startDate_field">시작일</label>
              </div>
              <input type="date" value={startDate} onChange={date => console.log(date)} name="startDate" id="startDate_field" required></input>
            </div>
            <div className="endDate-wrap">
              <div className="element label">
                <label htmlFor="startDate_field">종료일</label>
              </div>
              <input type="date" value={endDate} onChange={date => setEndDate(date)} name="endDate" id="endDate_field" required></input>
            </div>

            </div> */}
            <textarea className="modal_input" 
            placeholder={header === "스케줄 수정" ? "수정 할 내용을 입력하세요" : "할 일을 입력하세요"}
            value={todos.currentTodo} onChange={handleChange} />
            <button type="submit" className="save" 
            onClick={header === "스케줄 수정" & open ? handletextupdate(id) : handleSubmit}>
              save
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};
export default Modal;
