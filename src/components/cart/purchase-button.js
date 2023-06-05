import React from "react";
import "../../assets/css/cart/purchase_button.css";

function PurchaseButton({ onClick }) {
  return (
    <div className="bottom_btn_container">
      <button className="bottom_btn purchase_button" onClick={onClick}>
        <span className="bottom_btn_text">구매하기</span>
      </button>
    </div>
  );
}

export default PurchaseButton;
