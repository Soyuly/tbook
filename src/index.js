import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./assets/css/init.css";
import "./assets/css/reset.css";
import AdditionalPage from "./pages/account/addtional-page";
import LoginPage from "./pages/account/login-page";
import SignUpPage from "./pages/account/sign-up-page";
import AIModeSelectPage from "./pages/ai-mode-select-page";
import MainPage from "./pages/main-page";
import ItemDetailPage from "./pages/item-detail.page";
import AiFilterPage from "./pages/ai-filter-page";
import RecommendPage from "./pages/recommend-page";
import CartPage from "./pages/cart-page";
import OrderPage from "./pages/order-page";
import MyPage from "./pages/my-page";
import OrderSinglePage from "./pages/order-single";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup/oauth" element={<AdditionalPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/aimode" element={<AIModeSelectPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/detail/:id" element={<ItemDetailPage />} />
          <Route path="/filter" element={<AiFilterPage />} />
          <Route path="/cart/:userId" element={<CartPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/order" element={<OrderSinglePage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
