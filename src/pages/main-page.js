import React, { useEffect, useState, useCallback } from "react";
import "../assets/css/itemMain.css";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiTwotoneFilter } from "react-icons/ai";
import { AiTwotoneShopping } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../apis/product/products";
import { useInView } from "react-intersection-observer";
import { getProductsByFilter } from "../apis/product/get-products-by-filter";
import { MADE_BY, PRICE, WEIGHT } from "../utils/spec";

function MainPage(props) {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const [selectedWeightButton, setSelectedWeightButton] = useState(null);
  const [selectedPriceButton, setSelectedPriceButton] = useState(null);
  const [selectedMadeByButtons, setSelectedMadeByButtons] = useState([]);

  const handleMadeByButtonClick = (madeBy) => {
    setPage(0);
    if (selectedMadeByButtons.includes(madeBy)) {
      // 이미 선택된 버튼일 경우 선택 해제
      setSelectedMadeByButtons(
        selectedMadeByButtons.filter((item) => item !== madeBy)
      );
    } else {
      // 선택되지 않은 버튼일 경우 선택
      setSelectedMadeByButtons([...selectedMadeByButtons, madeBy]);
    }
  };

  const isMadeByButtonSelected = (madeBy) => {
    return selectedMadeByButtons.includes(madeBy);
  };

  const handleWeightClick = (weight) => {
    setPage(0);

    if (weight === selectedWeightButton) {
      return setSelectedWeightButton(null);
    }
    setSelectedWeightButton(weight);
  };

  const handlePriceButtonClick = (price) => {
    setPage(0);

    if (price === selectedPriceButton) {
      return setSelectedPriceButton(null);
    }

    setSelectedPriceButton(price);
  };

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    setLoading(true);

    await getProductsByFilter(
      page,
      selectedMadeByButtons,
      selectedPriceButton,
      selectedWeightButton
    ).then((res) => {
      setProducts((prevState) => [...prevState, ...res.data.content]);
    });

    setLoading(false);
  }, [page]);

  async function getItemsWithOption() {
    await getProductsByFilter(
      page,
      selectedMadeByButtons,
      selectedPriceButton,
      selectedWeightButton
    ).then((res) => {
      setProducts((prevState) => [...res.data.content]);
    });
  }

  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    getItemsWithOption();
  }, [selectedMadeByButtons, selectedPriceButton, selectedWeightButton]);

  useEffect(() => {
    if (inView && !loading && page < 44) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

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
                onClick={() => navigate("/recommend")}
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
                <div className="main_btns_container">
                  {MADE_BY.map((item, index) => (
                    <div
                      className={
                        isMadeByButtonSelected(item)
                          ? "selected_main_btns"
                          : "main_btns"
                      }
                      key={index}
                      onClick={() => handleMadeByButtonClick(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="madeBy_name">무게</div>
                <div className="main_btns_container ">
                  {WEIGHT.map((item, index) => (
                    <div
                      className={
                        item === selectedWeightButton
                          ? "selected_main_btns"
                          : "main_btns"
                      }
                      key={index}
                      onClick={() => handleWeightClick(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="madeBy_name">가격대</div>
                <div className="main_btns_container ">
                  {PRICE.map((item, index) => (
                    <div
                      className={
                        item === selectedPriceButton
                          ? "selected_main_btns"
                          : "main_btns"
                      }
                      key={index}
                      onClick={() => handlePriceButtonClick(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="divider" />
          </>
        )}

        <div className="notebook-container">
          {products.map((item, index) => (
            <>
              {products.length - 1 == index ? (
                <div
                  className="notebook-item"
                  style={{ cursor: "pointer" }}
                  key={index}
                  onClick={() => navigate("/detail/" + item.id)}
                >
                  <div ref={ref}>
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="notebook-image"
                    />
                    <div className="notebook-title">{item.productName}</div>
                    <div className="notebook-price">
                      {item.productPrice && item.productPrice.toLocaleString()}
                      원
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="notebook-item"
                  style={{ cursor: "pointer" }}
                  key={index}
                  onClick={() => navigate("/detail/" + item.id)}
                >
                  <div>
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="notebook-image"
                    />
                    <div className="notebook-title">{item.productName}</div>
                    <div className="notebook-price">
                      {item.productPrice && item.productPrice.toLocaleString()}
                      원
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPage;
