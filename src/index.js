import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./assets/css/init.css";
import "./assets/css/reset.css";
import AIModeSelectPage from "./pages/ai-mode-select-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/sign-up-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/aimode" element={<AIModeSelectPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
