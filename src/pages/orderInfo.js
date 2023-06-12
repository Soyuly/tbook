import { useState, useEffect } from "react";
import { getUserOrderInfo } from "../apis/mypage/get-user-orderInfo";
import AppBar from "../components/common/app-bar";
import OrderInfoItem from "../components/order/order-info-item";
import "../assets/css/order/order-info.css";

function OrderInfo() {
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    getUserOrderInfo(localStorage.getItem("userId")).then((res) => {
      console.log(res.data);
      setOrderInfo(res.data.list);
    });
  }, []);

  return (
    <div className="container">
      <header>
        <AppBar appBarName={"주문 목록"} navigateTo={"/"} />
        {orderInfo.length > 0 ? (
          orderInfo.map((order) => (
            <OrderInfoItem
              productId={order.productId}
              productName={order.productName}
              productMadeBy={order.productMadeBy}
              productImage={order.productImage}
              quantity={order.quantity}
              totalPrice={order.totalPrice}
              unitPrice={order.unitPrice}
            />
          ))
        ) : (
          <div className="order-info-item-null">
            현재 주문한 제품이 없어요. <br />
            주문 목록을 새로운 제품으로 채워보세요.
          </div>
        )}
      </header>
      <div></div>
    </div>
  );
}

export default OrderInfo;
