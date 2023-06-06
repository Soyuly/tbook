import React, { useState } from "react";
import { BsCheckSquareFill, BsCheckSquare } from "react-icons/bs";

function CartItem({ item, onCountChange, checked, onCheckChange }) {
  const handleCheckboxClick = () => {
    onCheckChange(item.id, !checked);
  };

  const handleMinusClick = () => {
    if (item.count > 1) {
      onCountChange(item.id, item.count - 1);
    }
  };

  const handlePlusClick = () => {
    if (item.count < 99) {
      onCountChange(item.id, item.count + 1);
    }
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
        <div className="cart_item-title-text">{item.title}</div>
        <ion-icon name="close-outline" className="cart_item-cancel"></ion-icon>
      </div>
      <div className="cart_item-content-wrapper">
        <img
          src={item.imgSrc}
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
            <div className="cart_item-company">{item.company}</div>
          </div>
          <div className="cart_item-release">{item.name}</div>
          <div className="cart_item-release">{item.release}</div>
          <div className="cart_item-price">
            {item.price && item.price.toLocaleString()}&nbsp;원
          </div>
        </div>

        <div className="cart_item_count">
          <div className="cart_item_count-minus" onClick={handleMinusClick}>
            -
          </div>
          <input
            className="cart_item_count-box"
            type="number"
            value={item.count}
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
