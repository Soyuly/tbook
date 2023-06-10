// src/ShoppingCartModal.js
import React from "react";
import Modal from "react-modal";

import "../../../assets/css/product/product_detail.css";

Modal.setAppElement("#root");

function ProductDetailModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      contentLabel="장바구니 모달"
    >
      <img
        width={120}
        height={120}
        src="/assets/icons/check.png"
        alt="cart add"
        className="product-cart-add-image"
      />

      <div className="product-cart-modal-title">
        <span>성공적으로</span>
        <span>장바구니에 추가되었습니다!</span>
      </div>
      <div className="product-cart-modal-button">
        <div className="product-cart-modal-button-close" onClick={onClose}>
          닫기
        </div>
        <div className="product-cart-modal-button-to-cart" onClick={onClose}>
          장바구니로 가기
        </div>
      </div>
    </Modal>
  );
}

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default ProductDetailModal;
