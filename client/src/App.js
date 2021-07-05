import "./App.css";
import React ,{useState} from "react";
import { Link, Route } from "react-router-dom";
import LandingPage from "./Component/Pages/LandingPage/LandingPage";
import LoginPage from "./Component/Pages/MemberPage/LoginPage";
import SignupPage from "./Component/Pages/MemberPage/SignupPage";
import SchedulePage from "./Component/Pages/Schedule/SchedulePage";
import NextLandingPage from "./Component/Pages/LandingPage/NextLandingPage";
import NextSchedulePage from "./Component/Pages/Schedule/NextSchedulePage";
import logoutIcon from "./image/icon-logout.svg";
import homeIcon from "./image/icon-main.svg";
import scheduleIcon from "./image/icon-check-last-schedule.svg";
import Auth from "./hoc/auth";

import "./mediaquery.css";

function App(props) {
  const buttonActive = (event) => {
    let menuList = document.querySelectorAll("#menu li");
    menuList.forEach((value, index, array) => {
      array[index].classList.remove("active");
  
    });


    event.currentTarget.classList.add("active");
  };

  return (
    <div className="App">
      <div id="content-box">
        <Route exact path="/" component={Auth(LandingPage, null)}></Route>
        <Route exact path="/login" component={Auth(LoginPage, null)}></Route>
        <Route exact path="/signup" component={Auth(SignupPage, null)}></Route>
        <Route exact path="/schedule"component={Auth(SchedulePage, null)}></Route>
        <Route exact path="/next" component={Auth(NextLandingPage, null)}></Route>
        <Route exact path="/schedule/next" component={Auth(NextSchedulePage, null)}></Route>
       
        
      </div>
      <nav>
        <ul id="menu">
          <li onClick={buttonActive} key="logout">
            <Link to="/login">
              <img src={logoutIcon} alt="logout" />
            </Link>
          </li>
          <li className="active" onClick={buttonActive} key="home">
            <Link to="/">
              <img src={homeIcon} alt="home" />
            </Link>
          </li>
          <li onClick={buttonActive} key="schedule">
            <Link to="/schedule">
              <img src={scheduleIcon} alt="schedule" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
