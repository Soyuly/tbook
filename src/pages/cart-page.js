import React, { useState, useEffect } from "react";
import "../assets/css/cart/cart.css";

import CartItem from "../components/cart/cart-item";
import TotalPrice from "../components/cart/total-price";
import PurchaseButton from "../components/cart/purchase-button";
import { BsCheckSquareFill, BsCheckSquare } from "react-icons/bs";
import AppBar from "../components/common/app-bar";
import { getProductCartByUserId } from "../apis/cart/get-cart-info-by-userId";
import purchaseInfoState from "../store/order/purchaseInfoState";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { deleteCartItem } from "../apis/cart/delete-cart-item";

function CartPage() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [delieveryPrice, setDelieveryPrice] = useState(2500);
  const setPurchaseInfo = useSetRecoilState(purchaseInfoState);
  const navigate = useNavigate();

  useEffect(() => {
    getProductCartByUserId(1).then((res) => {
      console.log(res.data.list);
      setItems(res.data.list);
    });
  }, []);

  useEffect(() => {
    setItems(items);
  }, [items]);

  // 아이템 삭제 핸들러
  const handleItemDelete = async (cartId) => {
    try {
      await deleteCartItem(cartId); // deleteCartItem 함수를 호출하여 카트 아이템 삭제 API를 실행합니다.
      setItems(items.filter((item) => item.cartId !== cartId)); // 삭제된 아이템을 제외한 새로운 아이템 목록을 설정합니다.
    } catch (error) {
      console.error("카트 아이템 삭제에 실패했습니다.", error);
    }
  };

  // 수량 변경 핸들러
  const handleItemCountChange = (productId, newCount) => {
    setItems(
      items.map((item) =>
        item.productId === productId ? { ...item, quantity: newCount } : item
      )
    );
  };

  function handlePurchase() {
    // 체크된 아이템들만 필터링
    const checkedItemsInfo = items.filter((item) =>
      checkedItems.includes(item.productId)
    );

    // 모든 정보를 하나의 객체로 모음
    const purchaseInfo = {
      items: checkedItemsInfo,
      totalPrice: totalPrice,
      deliveryPrice: delieveryPrice,
      finalPrice: totalPrice + delieveryPrice,
    };

    console.log(purchaseInfo);
    setPurchaseInfo(purchaseInfo);
    navigate("/order");
  }

  const handleItemCheckChange = (productId, checked) => {
    if (checked) {
      setCheckedItems([...checkedItems, productId]);
    } else {
      setCheckedItems(
        checkedItems.filter((itemProductId) => itemProductId !== productId)
      );
    }
  };

  const handleAllCheckChange = () => {
    if (isAllChecked) {
      setCheckedItems([]);
    } else {
      setCheckedItems(items.map((item) => item.productId));
    }
    setIsAllChecked(!isAllChecked);
  };

  useEffect(() => {
    let sum = 0;
    items.forEach((item) => {
      if (checkedItems.includes(item.productId)) {
        sum += item.unitPrice * item.quantity;
      }
    });
    setTotalPrice(sum);
  }, [items, checkedItems]);

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
            key={item.productId}
            item={item}
            onCountChange={handleItemCountChange}
            checked={checkedItems.includes(item.productId)}
            onCheckChange={handleItemCheckChange}
            onDelete={handleItemDelete}
          />
        ))}
      </div>
      <TotalPrice
        totalItemPrice={totalPrice}
        deliveryPrice={delieveryPrice}
        totalPrice={totalPrice + delieveryPrice}
      />
      <PurchaseButton onClick={handlePurchase} />
    </div>
  );
}

export default CartPage;
