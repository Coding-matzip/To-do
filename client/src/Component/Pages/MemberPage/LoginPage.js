// import axios from "axios";
import React, { useEffect, useState } from "react";
import { siteTitle } from "../../Config";
import "./MemberPage.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import kakaoLoginButton from "../../../image/kakao_login_medium_narrow.png";

const { Kakao } = window;

function LoginPage(props) {
  const loginWithKakao = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject("Kakao 인스턴스가 존재하지 않습니다.");
        }
        Kakao.Auth.login({
          success: (res) => {
            localStorage.setItem("token", res.token);
            props.history.push("/");
          },
          fail: (err) => {
            console.error(err);
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
  const logoutWithKakao = () => {
    if (Kakao.Auth.getAccessToken()) {
      console.log(
        "카카오 인증 액세스 토큰이 존재합니다.",
        Kakao.Auth.getAccessToken()
      );
      Kakao.Auth.logout(() => {
        console.log("로그아웃되었습니다.", Kakao.Auth.getAccessToken());
        localStorage.clear();
        props.history.push({
          pathname : "/login",
          state : { isLogin : "false"}
        });
      });
    }
  };

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push({
          pathname : "/",
          state : { isLogin : "true"}
        });
      } else {
        alert("회원 정보가 일치하지 않습니다.");
      }
    });
  };

  useEffect(() => {
    document.title = `로그인 - ${siteTitle}`;
  }, []);

  return (
    <div className="flex flex-jc-c flex-ai-c height-100p">
      <section>
        <div id="main-content">
          <div id="content-name">Login</div>
          <form method="post" onSubmit={onSubmitHandler}>
            <div className="input-area">
              <div className="element label">
                <label htmlFor="email_field">Email</label>
              </div>
              <div className="element">
                <input
                  type="email"
                  value={Email}
                  onChange={onEmailHandler}
                  name="email"
                  id="email_field"
                  required
                ></input>
              </div>
            </div>
            <div className="input-area">
              <div className="element label">
                <label htmlFor="email_field">Password</label>
              </div>
              <div className="element">
                <input
                  type="password"
                  value={Password}
                  onChange={onPasswordHandler}
                  name="password"
                  id="password_field"
                  required
                ></input>
              </div>
            </div>
            <div id="button-area" className="flex flex-ai-c flex-jc-b">
              <span>
                <Link to="/signup">
                  <button className="login" type="button">
                    Sign Up
                  </button>
                </Link>
              </span>
              <span>
                <button className="login" type="submit">
                  Log In
                </button>
              </span>
            </div>
          </form>
          <div id="social-login-name">Social Login</div>
          <button type="button" id="kakao-login-btn" onClick={loginWithKakao}>
            <img src={kakaoLoginButton} alt="Kakao Social Login Button"></img>
          </button>
        </div>
      </section>
    </div>
  );
}

export default withRouter(LoginPage);
