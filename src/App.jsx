import React from "react";
import {
  AskGPT,
  ChangePassword,
  ChoosePlatform,
  ChooseProdutcs,
  Drops,
  Financial,
  Home,
  ImageInput,
  ManageAccount,
  NTF,
  Payment,
  PaymentInformation,
  Pricing,
  Privacy,
  Profile,
  Settings,
  SignIn,
  SignUp,
  SingleComplete,
  SingleDrop,
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
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="settings/payment" element={<Payment />} />
        <Route
          path="settings/payment/information"
          element={<PaymentInformation />}
        />
        <Route path="settings/manage-account" element={<ManageAccount />} />
        <Route path="settings/change-password" element={<ChangePassword />} />
        <Route path="drops" element={<Drops />} />
        <Route path="drops/:id" element={<SingleDrop />} />
        <Route path="drops/complete/:id" element={<SingleComplete />} />
        <Route path="financial" element={<Financial />} />
        <Route path="ntf" element={<NTF />} />
      </Route>
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<h1>Not Found Page...!</h1>} />
    </Routes>
  );
};

export default App;
