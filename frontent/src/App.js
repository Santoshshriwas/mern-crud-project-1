import React from "react";
import Layout from "./Layout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./conponent/Home/Home";
import Insert from "./conponent/Insert/Insert";
import Display from "./conponent/Display/Display";
import Update from "./conponent/Update/Update";
import Edit from "./conponent/Edit/Edit";
import Search from "./conponent/Search/Search";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/display" element={<Display/>} />
            <Route path="/update" element={<Update/>} />
            <Route path="edit/:id" element={<Edit/>} />
            <Route path="search" element={<Search/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
