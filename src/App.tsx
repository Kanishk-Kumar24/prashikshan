import React from "react";
import { Routes, Route, BrowserRouter, RouteProps } from "react-router-dom";

import Form from "./components/Form";
import Status from "./components/Status";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
