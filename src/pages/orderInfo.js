import { useState, useEffect } from "react";
import { getUserOrderInfo } from "../apis/mypage/get-user-orderInfo";
import AppBar from "../components/common/app-bar";
import OrderInfoItem from "../components/order/order-info-item";

function OrderInfo() {
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    getUserOrderInfo(1).then((res) => {
      console.log(res.data);
      setOrderInfo(res.data.list);
    });
  }, []);

  return (
    <div className="container">
      <header>
        <AppBar appBarName={"주문 목록"} />
        {orderInfo.map((order) => (
          <OrderInfoItem
            productId={order.productId}
            productName={order.productName}
            productMadeBy={order.productMadeBy}
            productImage={order.productImage}
            quantity={order.quantity}
            totalPrice={order.totalPrice}
            unitPrice={order.unitPrice}
          />
        ))}
      </header>
      <div></div>
    </div>
  );
}

export default OrderInfo;
