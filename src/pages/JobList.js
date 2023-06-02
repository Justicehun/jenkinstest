import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/JobList.css";

function JobList() {
  const jobs = [
    {
      title: "웹 개발자 모집",
      tag: "정규직",
      content:
        "저희 회사에서는 웹 개발자를 모집합니다. 주요 업무는 웹사이트 및 어플리케이션 개발이며, 프론트엔드와 백엔드 개발 모두 가능한 분을 우대합니다.",
      content2:
        "자세한 사항은 이력서와 함께 hr@ourcompany.com 으로 문의해 주세요.",
    },
    {
      title: "마케팅 담당자 모집",
      tag: "계약직",
      content:
        "저희 회사에서 마케팅 담당자를 모집합니다. 주요 업무는 제품 홍보 및 마케팅 전략 수립 등입니다.",
      content2:
        "자세한 사항은 이력서와 함께 hr@ourcompany.com 으로 문의해 주세요.",
    },
    {
      title: "디지털 마케팅",
      tag: "인턴쉽",
      content:
        "저희 회사에서는 디지털 마케팅 인턴을 모집합니다. 디지털 마케팅 관련 분야에서 전문가가 되고 싶은 열정적인 인재를 기다립니다.",
      content2:
        "지원 자격: 대학교 재학생, 디지털 마케팅 분야에 대한 지식 및 경험 보유",
    },
    {
      title: "디자이너",
      tag: "단기계약직",
      content:
        "저희 회사에서는 디자이너를 모집합니다. 단기간에 빠르게 일하며 경험을 쌓을 수 있는 기회입니다.",
      content2: "지원 자격: 디자인 전공자, Adobe CC 등 디자인 툴 사용 가능자",
    },
    {
      title: "영업 담당자",
      tag: "정규직",
      content:
        "저희 회사에서는 영업 담당자를 모집합니다. IT 제품에 대한 이해도와 커뮤니케이션 능력이 뛰어난 분을 찾습니다.",
      content2:
        "지원 자격: 영업 분야 경력 5년 이상, IT 제품에 대한 이해도 보유",
    },
  ];
  const [tag, setTag] = useState("전체");
  const selectTag = (event) => {
    setTag(event.target.value);
  };

  function Job({ job }) {
    return (
      <div className="job-posting">
        <h2>{job.title}</h2>
        {job.tag === "정규직" ? (
          <div className="job-type full-time">정규직123</div>
        ) : null}
        {job.tag === "계약직" ? (
          <div className="job-type contract">계약직</div>
        ) : null}
        {job.tag === "인턴쉽" ? (
          <div className="job-type internship">인턴쉽</div>
        ) : null}
        {job.tag === "단기계약직" ? (
          <div className="job-type part-time">단기계약직</div>
        ) : null}

        <div>
          <p>{job.content}</p>
        </div>
        <div>
          <p>{job.content2}</p>
        </div>
      </div>
    );
  }

  const filteredJobs =
    tag === "전체" ? jobs : jobs.filter((job) => job.tag === tag);

  return (
    <div className="container">
      <h1>채용 공고</h1>
      <div className="selectTag">
        <strong>공고 모아보기 </strong>
        <button onClick={selectTag} value={"전체"} className="job-type">
          전체
        </button>
        <button
          onClick={selectTag}
          value={"정규직"}
          className="job-type full-time"
        >
          정규직
        </button>
        <button
          onClick={selectTag}
          value={"계약직"}
          className="job-type contract"
        >
          계약직
        </button>
        <button
          onClick={selectTag}
          value={"인턴쉽"}
          className="job-type internship"
        >
          인턴쉽
        </button>
        <button
          onClick={selectTag}
          value={"단기계약직"}
          className="job-type part-time"
        >
          단기계약직
        </button>
      </div>
      {filteredJobs.map((job) => (
        <Link
          to={"/detail"}
          state={{ title: job.title, tag: job.tag, content: job.content }}
          style={{ textDecoration: "none" }}
          key={job.title}
        >
          <Job job={job} />
        </Link>
      ))}

      <div class="pagination">
        <button>&laquo;</button>
        <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>&raquo;</button>
      </div>
    </div>
  );
}

export default JobList;
