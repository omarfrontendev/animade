import React from "react";
import {
  AskGPT,
  ChoosePlatform,
  ChooseProdutcs,
  Home,
  ImageInput,
  Pricing,
  SignIn,
  SignUp,
  SingleInput,
  VerifyNumber,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { MainLayout, FluidLayout, UserLayout } from "./layouts";

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
      <Route path="" element={<UserLayout />}>
        <Route path="single-input" element={<SingleInput />} />
        <Route path="ask-ai" element={<AskGPT />} />
        <Route path="image-input" element={<ImageInput />} />
      </Route>
      <Route path="" element={<UserLayout noHeader={true} />}>
        <Route path="choose-platform" element={<ChoosePlatform />} />
        <Route path="choose-products" element={<ChooseProdutcs />} />
      </Route>
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<h1>Not Found Page...!</h1>} />
    </Routes>
  );
};

export default App;
