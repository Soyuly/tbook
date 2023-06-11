import React, { useEffect, useState, useCallback } from "react";
import "../assets/css/itemMain.css";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { AiTwotoneFilter, AiOutlineFilter } from "react-icons/ai";
import { AiTwotoneShopping } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../apis/product/products";
import { useInView } from "react-intersection-observer";
import { getProductsByFilter } from "../apis/product/get-products-by-filter";
import { MADE_BY, PRICE, WEIGHT } from "../utils/spec";
import { getCookie, removeCookie } from "../utils/cookie";

function MainPage(props) {
  const navigate = useNavigate();
  // 필터 화면에 보이는지 여부
  const [isShow, setIsShow] = useState(true);

  // 실제 노트북 제품 정보들
  const [products, setProducts] = useState([]);

  // 무한 스크롤 구현을 위한 변수
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  // 필터에 각 버튼이 선택되어 있는지 나타내는 상태변수
  const [selectedWeightButton, setSelectedWeightButton] = useState(null);
  const [selectedPriceButton, setSelectedPriceButton] = useState(null);
  const [selectedMadeByButtons, setSelectedMadeByButtons] = useState([]);

  // 필터 클릭
  const handleFilterButtonClick = () => setIsShow(!isShow);

  /**
   * 제조사를 클릭하면, 해당 제조사가 선택돼서 필터링 됨
   */
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

  /**
   * 해당 제조사가 사용자가 눌렀는지 확인하는 변수
   */
  const isMadeByButtonSelected = (madeBy) => {
    return selectedMadeByButtons.includes(madeBy);
  };

  /**
   * 노트북 무게 선택
   */
  const handleWeightClick = (weight) => {
    setPage(0);

    if (weight === selectedWeightButton) {
      return setSelectedWeightButton(null);
    }
    setSelectedWeightButton(weight);
  };

  /**
   *  노트북 가격 선택
   */
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
    )
      .then((res) => {
        if (res) {
          setProducts((prevState) => [...prevState, ...res.data.content]);
        }
      })
      .catch((err) => console.log(err));

    setLoading(false);
  }, [page]);

  /**
   * 필터를 클릭했을 때 서버쪽에 요청을 보내는 함수
   */
  async function getItemsWithOption() {
    await getProductsByFilter(
      page,
      selectedMadeByButtons,
      selectedPriceButton,
      selectedWeightButton
    ).then((res) => {
      if (res) {
        setProducts((prevState) => [...res.data.content]);
      }
    });
  }

  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    getItemsWithOption();
  }, [selectedMadeByButtons, selectedPriceButton, selectedWeightButton]);

  /**
   * 무한 스크롤을 구현
   */
  useEffect(() => {
    if (inView && !loading && page < 44) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <>
      <div className="itemMain_view">
        <div className="header">
          <div className="logo">
            <img
              src="/assets/item/logo.png"
              alt="트북이 로고"
              className="main-logo-image"
            />

            <div>
              <BsRobot
                className="item_filter_icon"
                onClick={() => navigate("/recommend")}
              />

              {!getCookie("access_token") ? (
                <RiAccountCircleLine
                  className="item_filter_icon"
                  onClick={() => navigate("/login")}
                />
              ) : (
                <BiLogOut
                  className="item_filter_icon"
                  onClick={() => {
                    removeCookie("access_token");
                    window.location.reload();
                  }}
                />
              )}

              {isShow ? (
                <AiTwotoneFilter
                  className="item_filter_icon"
                  onClick={handleFilterButtonClick}
                />
              ) : (
                <AiOutlineFilter
                  className="item_filter_icon"
                  onClick={handleFilterButtonClick}
                />
              )}

              {/* //TODO userId */}
              <AiTwotoneShopping
                className="shopping_cart"
                style={{ cursor: "pointer" }}
                // onClick={() => navigate("/cart/" + "1")}
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
          {products.length > 0 ? (
            products.map((item, index) => (
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
                        {item.productPrice &&
                          item.productPrice.toLocaleString()}
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
                        {item.productPrice &&
                          item.productPrice.toLocaleString()}
                        원
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))
          ) : (
            <>해당하는 노트북이 없습니다.</>
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
