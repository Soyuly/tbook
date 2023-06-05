import React, { useEffect, useState } from "react";
import "../assets/css/itemMain.css";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiTwotoneFilter } from "react-icons/ai";
import { AiTwotoneShopping } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../apis/product/products";

function MainPage(props) {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(true);
  const [products, setProducts] = useState([]);

  /*
   * PRODUCT 데이터 조회
   */
  useEffect(() => {
    const response = getProducts();
    response.then((rs) => {
      setProducts(rs.data);
    });
  }, []);

  const handleFilterButtonClick = () => setIsShow(!isShow);

  return (
    <>
      <div className="itemMain_view">
        <div className="header">
          <div className="logo">
            <img
              src="assets/item/logo.png"
              alt="트북이 로고"
              className="main-logo-image"
            />

            <div>
              <BsRobot
                className="item_filter_icon"
                onClick={() => navigate("/filter")}
              />
              <RiAccountCircleLine
                className="item_filter_icon"
                onClick={() => navigate("/login")}
              />
              <AiTwotoneFilter
                className="item_filter_icon"
                onClick={handleFilterButtonClick}
              />
              <AiTwotoneShopping
                className="shopping_cart"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/cart")}
              />
            </div>
          </div>
        </div>
        {isShow && (
          <>
            <div id="filter_container">
              <div id="filter_body">
                <div className="madeBy_name">제조사</div>
                <div className="container">
                  <div className="btns">SAMSUNG</div>
                  <div className="btns">SAMSUNG</div>
                  <div className="btns">SAMSUNG</div>
                  <div className="btns">SAMSUNG</div>
                  <div className="btns">SAMSUNG</div>
                </div>

                <div className="madeBy_name">용도</div>
                <div className="container">
                  <div className="btns">고사양게임 🎮</div>
                  <div className="btns">문서작업 📄</div>
                  <div className="btns">그래픽작업 👩‍💻</div>
                  <div className="btns">가성비최고 👍</div>
                  <div className="btns">트북이추천 😁</div>
                </div>

                <div className="madeBy_name">무게</div>
                <div className="container">
                  <div className="btns">~ 1kg</div>
                  <div className="btns">~ 1.5kg</div>
                  <div className="btns">~ 2kg</div>
                  <div className="btns">~ 3kg</div>
                </div>
                <div className="madeBy_name">가격대</div>
                <div className="container">
                  <div className="btns">~ 40만원</div>
                  <div className="btns">40 ~ 70만원</div>
                  <div className="btns">70 ~ 100만원</div>
                  <div className="btns">100 ~ 200만원</div>
                  <div className="btns">200만원 이상</div>
                </div>
              </div>
            </div>
            <div className="divider" />
          </>
        )}

        <div className="notebook-container">
          {products.map((product) => (
            <div className="notebook-item" style={{ cursor: "pointer" }}>
              <div key={product.productId}>
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="notebook-image"
                />
                <div className="notebook-title">{product.productName}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="line1">
          <div className="img1">
            <a href="#">
              <img src="assets/item/itemImage1.png" alt="item1" />
            </a>
          </div>
          <div className="img2">
            <a href="#">
              <img src="assets/item/itemImage2.png" alt="item2" />
            </a>
          </div>
        </div>
        <div className="line1_title">
          <div className="img1_title">[DELL] XPS 15</div>
          <div className="img2_title">[ASUS] ROG 제퍼러스</div>
        </div> */}
    </>
  );
}

export default MainPage;
