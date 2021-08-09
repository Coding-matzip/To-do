import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import LandingPage from "./Component/Pages/LandingPage/LandingPage";
import LoginPage from "./Component/Pages/MemberPage/LoginPage";
import SignupPage from "./Component/Pages/MemberPage/SignupPage";
import SchedulePage from "./Component/Pages/Schedule/SchedulePage";
import NextLandingPage from "./Component/Pages/LandingPage/NextLandingPage";
import logoutIcon from "./image/icon-logout.svg";
import homeIcon from "./image/icon-main.svg";
import scheduleIcon from "./image/icon-check-last-schedule.svg";
import Auth from "./hoc/auth";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./mediaquery.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { siteTitle } from "./Component/Config";
import { auth } from "./_actions/user_action";
import { useDispatch } from "react-redux";

function App(props) {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = siteTitle;
    getIsLogin();
  })

  async function getIsLogin () {
    dispatch(auth()).then((response) => {
      if(response.payload.isAuth) setIsLogin(true);
      else  setIsLogin(false);
    });
  }
  
  const buttonActive = (event) => {
    getIsLogin();
    let menuList = document.querySelectorAll("#menu li");
    menuList.forEach((value, index, array) => {
      array[index].classList.remove("active");
  
    });
    event.currentTarget.classList.add("active");
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        props.history.push({
          pathname : "/login",
          state : { isLogin : "false"}
        });
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  const userMenuRender = !isLogin ? (
    <li onClick={buttonActive} key="logout">
    <Link to="/login">
    <img src={logoutIcon} alt="logout" />
    </Link>
    </li>
  ) : (
    <li
    onClick={(buttonActive, handleClick)}
    aria-controls="simple-menu"
    aria-haspopup="true"
    key="logout"
    >
    <img src={logoutIcon} alt="logout" />
    </li>   
  )

  return (
    <Router>
      <div className="App">
        <div id="content-box">
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, true)}></Route>
            <Route
              exact
              path="/login"
              component={Auth(LoginPage, false)}
            ></Route>
            <Route
              exact
              path="/signup"
              component={Auth(SignupPage, false)}
            ></Route>
            <Route
              exact
              path="/schedule"
              component={Auth(SchedulePage, true)}
            ></Route>
            <Route
              exact
              path="/next"
              component={Auth(NextLandingPage, true)}
            ></Route>
          </Switch>
        </div>
        <nav>
          <ul id="menu">
            {userMenuRender}
            {/* https://material-ui.com/components/menus/ */}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <div id="member_info_email">{anchorEl? props.location.state.email:null}</div>
              <MenuItem onClick={onClickHandler}>Logout</MenuItem>
            </Menu>
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
    </Router>
  );
}

export default withRouter(App);
