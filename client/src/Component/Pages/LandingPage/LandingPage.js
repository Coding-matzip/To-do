import React, { useEffect } from "react";
import { siteTitle } from "../../Config";
import axios from "axios";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
    document.title = siteTitle; //Title 변경.
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  return (
    <div>
      <section>LandingPage</section>
      <button onClick={onClickHandler}>Logout</button>
    </div>
  );
}

export default withRouter(LandingPage);
