import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="tab1" element={<App />} />
        <Route path="tab2" element={<App />} />
        <Route path="tab3" element={<App />} />
        <Route path="tab4" element={<App />} />
        <Route path="tab5" element={<App />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
