import React from "react";
import Layout from "./Layout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./conponent/Home/Home";
import Insert from "./conponent/Insert/Insert";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/insert" element={<Insert />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
