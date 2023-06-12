import React, { useEffect, useState } from "react";
import "../assets/css/itemInfo.css";
import { getProductsById } from "../apis/product/get-products-by-id";
import { useNavigate, useParams } from "react-router-dom";
import { PowerOutline } from "react-ionicons";

import Modal from "react-modal";
import ProductDetailModal from "../components/product-detail/modal/product-detail-modal";
import { addProductCart } from "../apis/cart/add-product-cart";
import { onPaymentButtonClick } from "../utils/payment";
import { useSetRecoilState } from "recoil";
import purshaseSingleInfoState from "../store/order/purshaseSingleInfoState";

function ItemDetailPage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const visitedList = JSON.parse(localStorage.getItem("visited")) || [];
  const [activeDescription, setActiveDescription] = useState(null);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [cartLink, setCartLink] = useState("");
  const setPurchaseSingleInfo = useSetRecoilState(purshaseSingleInfoState);

  /**
   * 현재 날짜 가져오기
   */
  const currentDate = new Date();

  // 월과 일을 가져옵니다
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  // MM/DD 형식으로 조합하여 표시
  const formattedDate = `${month}/${day}`;

  const descriptionStyle = {
    opacity: 0.7,
  };

  const handleSinglePurchase = () => {
    const purchaseSingleInfo = {
      productId: product.productId,
      productName: product.productName,
      quantity: 1,
      unitPrice: product.productPrice,
    };

    setPurchaseSingleInfo(purchaseSingleInfo);
    console.log(purchaseSingleInfo);
    navigate("/order");
  };

  useEffect(() => {
    console.log("받아오기");
    getProductsById(id)
      .then((res) => {
        setProduct(res.data);

        // 내가 본 노트북에 기록 추가하기
        // 중복된 항목이 있는지 확인
        const isDuplicate = visitedList.includes(id);

        if (!isDuplicate) {
          visitedList.push(id);

          localStorage.setItem("visited", JSON.stringify(visitedList));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDescriptionButtonClick = (id) => {
    if (activeDescription === id) {
      return setActiveDescription(null);
    }
    setActiveDescription(id);
  };

  const handleModalClick = (productId) => {
    setIsOpen(true);

    addProductCart(localStorage.getItem("userId"), productId).then((res) =>
      console.log(res)
    );
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const getDescriptionStyle = (id) => {
    return {
      opacity: 0,
    };
  };

  return (
    <>
      <div className="itemInfo_view">
        <div className="detail-header ">
          <div className="back">
            <a onClick={() => navigate("/")}>
              <img
                src="/assets/item/left_actionable.png"
                alt="뒤로가기"
                onClick={() => navigate("/")}
              />
            </a>
          </div>

          <div className="item_title">{product.productName}</div>
          <div className="shopping_cart">
            <a href={"/cart/" + localStorage.getItem("userId")}>
              <img src="/assets/item/shopping_cart.png" alt="장바구니" />
            </a>
          </div>
        </div>
        <div className="item-image">
          <img
            src={product.productImage}
            alt="상품 이미지"
            className="labtop-image"
          />
        </div>
        <div className="item_script_container">
          <div className="item_script">
            <h3 className="item_name">{product.productName}</h3>

            <div className="item_madeby">제조사 {product.productMadeBy}</div>
          </div>
        </div>

        <div className="divider" />
        <div className="caption">제품 정보</div>
        <div className="table_Info">
          <table className="item_Info">
            <caption>제품 정보</caption>
            <tbody className="item_table">
              <tr>
                <th align="left">
                  CPU
                  <div className="vector_img">
                    <img
                      src="/assets/item/Vector.png"
                      alt="부연설명"
                      onClick={() => handleDescriptionButtonClick(1)}
                    />
                    <span
                      id="desc1"
                      className="vector_description"
                      style={{ opacity: activeDescription === 1 ? 0.7 : 0 }}
                    >
                      CPU는 내가 부릴 수 있는 노예의 수를 의미합니다.
                    </span>
                  </div>
                </th>
                <td>{product.productCpu}</td>
              </tr>
              <tr>
                <th align="left">
                  램
                  <div className="vector_img">
                    <img
                      src="/assets/item/Vector.png"
                      alt="부연설명"
                      onClick={() => handleDescriptionButtonClick(2)}
                    />
                    <span
                      id="desc2"
                      className="vector_description"
                      style={{ opacity: activeDescription === 2 ? 0.7 : 0 }}
                    >
                      램은 노예가 들고 있는 가방의 크기를 의미합니다.
                    </span>
                  </div>
                </th>
                <td>{product.productRamDetail}</td>
              </tr>
              <tr>
                <th align="left">
                  저장용량
                  <div className="vector_img">
                    <img
                      src="/assets/item/Vector.png"
                      alt="부연설명"
                      onClick={() => handleDescriptionButtonClick(3)}
                    />
                    <span
                      id="desc3"
                      className="vector_description"
                      style={{ opacity: activeDescription === 3 ? 0.7 : 0 }}
                    >
                      저장용량은 노예들이 일해서 얻은 식량을 저장하는 창고를
                      의미합니다.
                    </span>
                  </div>
                </th>
                <td>{product.productStorageDetail}</td>
              </tr>
              <tr>
                <th align="left">디스플레이</th>
                <td>{product.productDisplayDetail}</td>
              </tr>
              <tr>
                <th align="left">
                  그래픽
                  <div className="vector_img">
                    <img
                      src="/assets/item/Vector.png"
                      alt="부연설명"
                      onClick={() => handleDescriptionButtonClick(5)}
                    />
                    <span
                      id="desc5"
                      className="vector_description"
                      style={{ opacity: activeDescription === 5 ? 0.7 : 0 }}
                    >
                      이미지, 동영상, 게임 등의 시각적인 내용을 생성하고
                      표시하는 역할을 합니다.
                    </span>
                  </div>
                </th>
                <td>{product.productGraphic}</td>
              </tr>
              <tr>
                <th align="left">배터리</th>
                <td>{product.productBattery}wh</td>
              </tr>

              <tr>
                <th align="left">무게</th>
                <td>{product.productWeight}kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="divider" />
        <div className="price_info">
          <div className="min_date">{formattedDate} 최저가</div>
          <h3 className="detail-price">
            {product.productPrice && product.productPrice.toLocaleString()}원
          </h3>
        </div>
        <div className="detail-btn">
          <button
            className="shop-add-btn"
            onClick={() => handleModalClick(product.productId)}
          >
            장바구니 담기
          </button>
          <button
            className="order-add-btn"
            onClick={() => handleSinglePurchase()}

            // onClick={() =>
            //   onPaymentButtonClick(
            //     product.productId,
            //     product.productPrice,
            //     product.productName
            //   )
            // }
          >
            구매하기
          </button>
          <ProductDetailModal isOpen={isOpen} onClose={handleClose} />
        </div>
      </div>
    </>
  );
}

export default ItemDetailPage;
