import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/JobDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function JobDetail() {
  const location = useLocation();
  const title = location.state.title;
  const tag = location.state.tag;
  const content = location.state.content;

  return (
    <div className="container">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <button className="btn2">
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginTop: "2px" }} />{" "}
          {"\u00a0"}목록으로
        </button>
      </Link>
      <h1>
        {title} / {tag}
      </h1>
      <hr />
      <br />
      <div>
        <div className="content">{content}</div>
        <div className="content">
          <br />
          아래의 <strong>'지원하기'</strong>
          버튼을 클릭하여 지원 페이지로 이동하십시오.
        </div>
        <br />
        <a
          href="https://forms.gle/EyFkvnree9cGZA5CA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>지원하기</button>
        </a>
      </div>
    </div>
  );
}

export default JobDetail;
