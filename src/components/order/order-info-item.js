import "../../assets/css/order/order-info-item.css";

function OrderInfoItem({
  productId,
  productName,
  productMadeBy,
  productImage,
  quantity,
  totalPrice,
  unitPrice,
}) {
  return (
    <div key={productId} className="order-info-item-container">
      <img src={productImage} alt="상품 이미지" width={150} height={120}></img>
      <div className="order-info-item-info">
        <div className="order-info-item-title">{productName}</div>
        <div className="order-info-item-madeby">제조사: {productMadeBy}</div>
        <div className="order-info-item-price-quantity">
          {unitPrice.toLocaleString()}&nbsp; 원 / {quantity}&nbsp;개
        </div>
        <div className="order-info-item-total-price">
          총 가격 : {(unitPrice * quantity).toLocaleString()}&nbsp;원
        </div>
      </div>
    </div>
  );
}

export default OrderInfoItem;
