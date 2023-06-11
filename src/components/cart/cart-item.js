import React, { useState } from "react";
import { BsCheckSquareFill, BsCheckSquare } from "react-icons/bs";
import { CloseOutline } from "react-ionicons";
import { decreasementCartItemQuantity } from "../../apis/cart/decreasement-cart-item-quantity";
import { incrementCartItemQuantity } from "../../apis/cart/increment-cart-item-quantity";

function CartItem({ item, onCountChange, checked, onCheckChange, onDelete }) {
  const handleCheckboxClick = () => {
    onCheckChange(item.productId, !checked);
  };

  const handleMinusClick = () => {
    if (item.quantity > 1) {
      onCountChange(item.productId, item.quantity - 1);
      decreasementCartItemQuantity(item.cartId);
    }
  };

  const handlePlusClick = () => {
    if (item.quantity < 99) {
      onCountChange(item.productId, item.quantity + 1);
      incrementCartItemQuantity(item.cartId);
    }
  };

  const handleDelete = () => {
    onDelete(item.cartId); // deleteCartItem 로직을 호출하여 카트 아이템 삭제
  };

  return (
    <div className="cart_item">
      <div className="cart_item-title">
        {checked ? (
          <BsCheckSquareFill
            size="1.25rem"
            className="check-item"
            onClick={handleCheckboxClick}
          />
        ) : (
          <BsCheckSquare
            size="1.25rem"
            className="check-item"
            onClick={handleCheckboxClick}
          />
        )}

        <div className="cart_item-title-text">{item.productName}</div>
        <CloseOutline
          color={"#00000"}
          title={""}
          height="22px"
          className="cart_item-cancel"
          width="20px"
          onClick={() => handleDelete(item.cartId)}
        />

        {/* <IonIcon name="close-outline" className="cart_item-cancel"></IonIcon> */}
      </div>
      <div className="cart_item-content-wrapper">
        <img
          src={item.productImage}
          style={{
            height: 90,
            width: 90,
          }}
          alt=""
          className="cart_item-image"
        />
        <div className="cart_item-content">
          <div className="cart_item-makeby">
            제조사:
            <div className="cart_item-company">{item.productMadeBy}</div>
          </div>
          <div className="cart_item-release">{item.productName}</div>
          {/* <div className="cart_item-release">{item.release}</div> */}
          <div className="cart_item-price">
            {item.unitPrice && item.unitPrice.toLocaleString()}&nbsp;원
          </div>
        </div>

        <div className="cart_item_count">
          <div className="cart_item_count-minus" onClick={handleMinusClick}>
            -
          </div>
          <input
            className="cart_item_count-box"
            type="number"
            value={item.quantity}
            readOnly
          />
          <div className="cart_item_count-plus" onClick={handlePlusClick}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
