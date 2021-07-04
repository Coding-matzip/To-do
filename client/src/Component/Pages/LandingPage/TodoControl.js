import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from "react-icons/io";
import "./TodoControl.css"
import "./Modal";

const TodoControl = () => {

    const [pagenum,setpagenum] = useState(1);

    // useEffect( () => {
    //     setpagenum(1);
    // });

    const nextclick= () => {
        setpagenum(pagenum+1);
        console.log(pagenum);
    }

    const prevclick= () => {
        setpagenum(pagenum-1);
        console.log(pagenum);
    }

    // <Route exact path="/prev" component={Auth(NextLandingPage, null)}></Route>
    return (
        <div className="controler">
            <div className="prev" >
                <button onClick={prevclick}>
                    <Link to="/">
                        <IoIosArrowDropleftCircle size="40" color="#D9DBE9"/> 
                    </Link>
                </button>
                <span>Previous</span>
            </div>

            <span class="pagenum">
                {pagenum} / 2
            </span>

            <div className="next">
                <span className="checked">Next</span> 
                <button onClick={nextclick}>
                    <Link to="/next">
                        <IoIosArrowDroprightCircle className="checked" size="40" color="#D9DBE9"/>
                    </Link>
                </button>
            </div>

        </div>
    );
};


export default TodoControl;