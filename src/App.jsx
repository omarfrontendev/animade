import React from "react";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
