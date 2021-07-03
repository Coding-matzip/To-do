import React from "react";
import { IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from "react-icons/io";
import "./TodoControl.css"

const TodoControl = () => {
    return (
        <div className="controler">
            <div className="prev">
                <button>
                    <IoIosArrowDropleftCircle size="40" color="#D9DBE9"/> 
                </button>
                <span>Previous</span>
            </div>

            <span class="pagenum">
                1 / 2
            </span>

            <div className="next">
                <span className="checked">Next</span> 
                <button>
                    <IoIosArrowDroprightCircle className="checked" size="40" color="#D9DBE9"/>
                </button>
            </div>

        </div>
    );
};

export default TodoControl;