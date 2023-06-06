import React, { useState, useEffect } from "react";
import "../assets/css/cart/cart.css";

import CartItem from "../components/cart/cart-item";
import TotalPrice from "../components/cart/total-price";
import PurchaseButton from "../components/cart/purchase-button";
import { BsCheckSquareFill, BsCheckSquare } from "react-icons/bs";
import AppBar from "../components/common/app-bar";

function CartPage() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const [items, setItems] = useState([
    {
      id: 1,
      title: "LG전자 2022 그램15(12세대)",
      company: "LG",
      price: 1341350,
      count: 1,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0471/6039/3896/products/Macbook_Pro_M1_iStockBD2.png?v=1647169869&width=600",
    },
    {
      id: 2,
      title: "LG전자 2022 그램15(12세대)",
      company: "LG",
      price: 1341350,
      count: 1,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0471/6039/3896/products/Macbook_Pro_M1_iStockBD2.png?v=1647169869&width=600",
    },
    {
      id: 3,
      title: "LG전자 2022 그램15(12세대)",
      company: "LG",
      price: 1341350,
      count: 1,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0471/6039/3896/products/Macbook_Pro_M1_iStockBD2.png?v=1647169869&width=600",
    },
  ]);
  // 수량 변경 핸들러
  const handleItemCountChange = (id, newCount) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, count: newCount } : item
      )
    );
  };

  function handlePurchase() {
    console.log("구매하기 버튼이 클릭되었습니다.");
  }

  const handleItemCheckChange = (id, checked) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    } else {
      setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
    }
  };

  const handleAllCheckChange = () => {
    if (isAllChecked) {
      setCheckedItems([]);
    } else {
      setCheckedItems(items.map((item) => item.id));
    }
    setIsAllChecked(!isAllChecked);
  };

  useEffect(() => {
    setIsAllChecked(items.length !== 0 && items.length === checkedItems.length);
  }, [items, checkedItems]);

  return (
    <div className="container">
      <AppBar appBarName={"장바구니"} navigateTo={"/"} />
      <div className="cart-all-item-check">
        {isAllChecked ? (
          <BsCheckSquareFill
            size="1.25rem"
            className="check-all-item"
            onClick={handleAllCheckChange}
          />
        ) : (
          <BsCheckSquare
            size="1.25rem"
            className="check-all-item"
            onClick={handleAllCheckChange}
          />
        )}

        <span className="all-select-style">전체선택</span>
        <div className="cart-all-item-count">
          {checkedItems.length} / {items.length}
        </div>
      </div>
      <div className="cart_item-list">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onCountChange={handleItemCountChange}
            checked={checkedItems.includes(item.id)}
            onCheckChange={handleItemCheckChange}
          />
        ))}
      </div>
      <TotalPrice
        totalItemPrice={2682700}
        deliveryPrice={2500}
        totalPrice={2685200}
      />
      <PurchaseButton onClick={handlePurchase} />
    </div>
  );
}

export default CartPage;
