import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import JobDetail from "./pages/JobDetail";
import JobList from "./pages/JobList";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/detail" element={<JobDetail />} />
          <Route path="/" element={<JobList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
