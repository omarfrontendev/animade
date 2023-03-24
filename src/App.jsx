import React from "react";
import { Home, SignIn, SignUp, VerifyNumber } from "./pages";
import { Routes, Route } from "react-router-dom";
import { MainLayout, FluidLayout } from "./layouts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/" element={<FluidLayout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="vertify-number" element={<VerifyNumber />} />
      </Route>
      <Route path="*" element={<h1>Not Found Page...!</h1>} />
    </Routes>
  );
};

export default App;
