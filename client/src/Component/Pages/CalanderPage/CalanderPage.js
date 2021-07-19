import React , {useState,useEffect} from 'react';
import moment from "moment";
import "./CalanderPage.css"
import {
    getTodos,
  } from "../../../services/TodoService";

const CalanderPage = () => {
    const [getMoment,setMoment] = useState(moment());
    const today= getMoment;
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const [todos, setTodos] = useState({todos:[]});
    const [date ,setDate] = useState();

    useEffect(() =>{
        getTodos().then(function({ data }) {
            setTodos({todos:data})
        });
                
    });

    // console.log(todos.todos[0]);

    //캘린더만들기함수
    const calendarArr=()=>{
        let result = [];
        let week = firstWeek;
        // console.log(todos.todos[0].startdate);
        for ( week; week <= lastWeek; week++) {
          result = result.concat(
            <tr key={week}>
            {
              // eslint-disable-next-line no-loop-func
              Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

                if(moment().format('YYYY-MM-DD') === days.format('YYYY-MM-DD')){
                  return(
                      <td key={index} style={{backgroundColor:'red'}} >
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }else if(days.format('MM') !== today.format('MM')){
                  return(
                      <td key={index} style={{backgroundColor:'gray'}} >
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }
                // else if(todos.todos[0].startdate.split("T")[0] === days.format('YYYY-MM-DD')){
                //     return(
                //         <td key={index} >
                //           <span>{days.format('D')}</span>
                //           <span>{todos.todos[0].todo}</span>
                //         </td>
                //     );
                // }
                else{
                  return(
                      <td key={index}>
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }
              })
            }
          </tr>
            );
        }
        return result;
      }

    return (
        <div className="App">
            <div className="control">
                <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
                <span>{today.format("YYYY년 MM월")}</span>
                <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
            </div>
            <table>
                <tbody>
                   {calendarArr()}
                </tbody>
            </table>
        </div>
    );
};

export default CalanderPage;