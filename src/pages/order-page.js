import React, { useState, useEffect } from "react";

import "../assets/css/order/index.css";
import "../assets/css/order/order_item_list.css";
import "../assets/css/order/order.css";
import "../assets/css/order/payment_method.css";
import "../assets/css/order/payment_price.css";
import { useRecoilState, useRecoilValue } from "recoil";
import orderState from "../store/order/order";
import totalPaymentAmountState from "../store/order/total-payment";
import "../assets/css/common/app_bar.css";
import AppBar from "../components/common/app-bar.js";
import { useNavigate } from "react-router-dom";

import purchaseInfoState from "../store/order/purchaseInfoState";
import { onPaymentButtonClick } from "../utils/payment";
import { getMyProfile } from "../apis/get_my_profile-api";

function OrderPage() {
  // const [order, setOrder] = useRecoilState(orderState);
  const [order, setOrder] = useRecoilState(purchaseInfoState);
  const totalPaymentAmount = useRecoilValue(totalPaymentAmountState);
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const navigate = useNavigate();
  const totalQuantity = order.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handlePaymentMethodChange = (method) => {
    setOrder((prevOrder) => ({ ...prevOrder, paymentMethod: method }));
  };

  const handlePaymentButtonClick = async () => {
    const paymentSuccessful = await onPaymentButtonClick(
      order.paymentMethod,
      Math.floor(Math.random() * 100000) + 1,
      order.finalPrice,
      `${order.items[0].productName} 외 ${totalQuantity - 1}건`,
      order,
      "multiple"
    );

    if (paymentSuccessful) {
      navigate("/");
    }
  };

  useEffect(() => {
    getMyProfile()
      .then((res) => {
        setUserInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="order">
      <header>
        <hgroup>
          {/* TODO userId */}
          <AppBar
            appBarName={"주문 / 결제"}
            navigateTo={"/cart/" + localStorage.getItem("userId")}
          ></AppBar>
        </hgroup>
      </header>

      <div className="order_user-info">
        <span className="order-person-style">주문자 정보</span>
        <div className="order_user-name_and_phone">
          <span>성명·연락처</span>
          <div className="order_user-name">
            {/* {order.userInfo.name} / {order.userInfo.phone} */}
            {userInfo.name} / {userInfo.phone}
          </div>
        </div>
        <div className="order_user-address">
          <span>주소</span>
          <div className="order_user-address-detail">
            {/* {order.userInfo.address} */}
            {userInfo.address}
          </div>
        </div>
      </div>

      <div className="order-divider" />

      <div className="seperate-box"></div>

      <div className="order_item-container">
        <div className="order_item-title">
          <span>주문 상품</span>
          <div className="order_item-title-total-count">
            총 {totalQuantity}개
          </div>
        </div>

        <div className="order_item-list">
          {order.items.map((item, index) => (
            <div key={index} className="order_item">
              <div className="order_item-name">{item.productName}</div>

              <div className="order_item-count">
                &nbsp;&nbsp;/&nbsp;{item.quantity}개
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="order-divider" />

      <div className="payment_price">
        <div className="payment_price_title">결제 금액</div>
        <div className="payment_price-content">
          <div className="payment_price-total_item-container">
            총 상품 금액
            <span>원</span>
            <span className="payment_price-total_item">
              {order.totalPrice.toLocaleString()}
            </span>
          </div>
          <div className="payment_price-total_delivery-container">
            총 배송비
            <span>원</span>
            <span className="payment_price-total_delivery">
              {order.deliveryPrice.toLocaleString()}
            </span>
          </div>
          <div className="payment_price-total-container">
            총 결제 금액
            <span>원</span>
            <span className="payment_price-total">
              {order.finalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="order-divider" />

      <div className="payment_method">
        <span>결제 수단</span>

        <label className="payment_method-kakao">
          <input
            type="radio"
            name="payment_method"
            value="kakao"
            checked={order.paymentMethod === "kakaopay"}
            onChange={() => handlePaymentMethodChange("kakaopay")}
          />
          <img
            src="/assets/item/kakao_pay3.png"
            alt=""
            className="kakao_pay-image"
          ></img>
        </label>

        <label className="payment_method-generate">
          <input
            type="radio"
            name="payment_method"
            value="general"
            checked={order.paymentMethod === "kcp"}
            onChange={() => handlePaymentMethodChange("kcp")}
          />
          <span>일반 결제</span>
        </label>
      </div>

      <div className="bottom_btn_container">
        <button className="bottom_btn" onClick={handlePaymentButtonClick}>
          <span className="bottom_btn_text">결제하기</span>
        </button>
      </div>
    </div>
  );
}

export default OrderPage;
