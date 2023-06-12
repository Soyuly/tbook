import React from "react";

import "../../assets/css/cart/expect_price.css";

function TotalPrice({ totalItemPrice, deliveryPrice, totalPrice }) {
  return (
    <div className="expect_price-container">
      <span className="expect_price-title">결제 예상 금액</span>

      <div className="total_price-container">
        <div className="total_price-item">
          총 상품 금액
          <div>{totalItemPrice.toLocaleString()} 원</div>
        </div>
        <div className="total_price-delivery">
          총 배송비
          <div>{deliveryPrice.toLocaleString()} 원</div>
        </div>
        <div className="total_price-payment">
          총 결제 금액
          <div>{totalPrice.toLocaleString()} 원</div>
        </div>
      </div>
    </div>
  );
}

export default TotalPrice;
