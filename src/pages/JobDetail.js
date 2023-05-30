import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/JobDetail.css";
function JobDetail() {
  const locaation = useLocation();
  const title = locaation.state.title;
  const tag = locaation.state.tag;
  const content = locaation.state.content;

  return (
    <div className="container">
      <h1>
        {title} / {tag}
      </h1>
      <hr />
      <br />
      <div>
        <div>{content}</div>
        <div>
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
