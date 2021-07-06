import React, { useState } from "react";
import {Link} from "react-router-dom";
import { IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from "react-icons/io";
import "./TodoControl.css"
import "./Modal";

const TodoControl = ({completed,prevent}) => {
    const [pagenum,setpagenum] = useState(1);

    const nextclick= () => {
        setpagenum(pagenum+1)
    }

    const prevclick= () => {
        if(pagenum > 0){
            setpagenum(pagenum-1);
        }
    }

    return (
        <div className="controler">
            <div className="prev" >
                <button onClick={prevent ? null : prevclick}>
                    {prevent ? 
                    (<IoIosArrowDropleftCircle size="40" color="#D9DBE9"/>) 
                    :(
                        <Link to={completed ? "/schedule" : "/" }>
                            <IoIosArrowDropleftCircle size="40" color="#D9DBE9"/> 
                        </Link>
                        )
                    }
                </button>
                <span>Previous</span>
            </div>

            <span class="pagenum">
                {pagenum} / 2
            </span>

            <div className="next">
                <span className={prevent ? "next_span" : "next_span checked"}>Next</span> 
                <button onClick={prevent ? null : nextclick}>
                    {prevent ? 
                    (<IoIosArrowDroprightCircle size="40" color="#D9DBE9"/> )
                    :(
                        <Link to={completed ? "/schedule/next" : "/next" }>
                            <IoIosArrowDroprightCircle size="40" color="#5F2EEA"/> 
                        </Link>
                        )
                    }
                </button>
            </div>

        </div>
    );
};


export default TodoControl;