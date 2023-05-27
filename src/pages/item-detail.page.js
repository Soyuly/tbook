import React from "react";
import "../assets/css/itemInfo.css";

function ItemDetailPage() {
  return (
    <>
      <div className="itemInfo_view">
        <div className="header">
          <div className="back">
            <a href="../itemMain/itemMain.html">
              <img src="/assets/item/Left Actionable.png" alt="뒤로가기" />
            </a>
          </div>
          <div className="item_title">LG전자 2022 그램 15(12세대)</div>
          <div className="shopping_cart">
            <a href="#">
              <img src="/assets/item/shopping_cart.png" alt="장바구니" />
            </a>
          </div>
        </div>
        <div className="item-image">
          <img src="/assets/item/item-image.png" alt="상품 이미지" />
        </div>
        <div className="item_script_container">
          <div className="item_script">
            <h3 className="item_name">LG전자 2022 그램15(12세대)</h3>
            <div className="item_spec">15ZD95Q-GX56K WIN11 (SSD 500GB)</div>
            <div className="item_madeby">제조사 LG</div>
          </div>
        </div>
        <div className="caption">제품 정보</div>
        <div className="table_Info">
          <table className="item_Info">
            <caption>제품 정보</caption>
            <tbody className="item_table">
              <tr>
                <th align="left">
                  CPU
                  <div
                    className="vector_img"
                    onmouseover="showText(1)"
                    onmouseout="hideText(1)"
                  >
                    <img src="/assets/item/Vector.png" alt="부연설명" />
                    <span id="desc1" className="vector_description">
                      CPU는 내가 부릴 수 있는 노예의 수를 의미합니다.
                    </span>
                  </div>
                </th>
                <td>코어i5-1235U (1.3GHz)</td>
              </tr>
              <tr>
                <th align="left">
                  램
                  <div
                    className="vector_img"
                    onmouseover="showText(2)"
                    onmouseout="hideText(2)"
                  >
                    <img src="/assets/item/Vector.png" alt="부연설명" />
                    <span id="desc2" className="vector_description">
                      램은 노예가 들고 있는 가방의 크기를 의미합니다.
                    </span>
                  </div>
                </th>
                <td>LPDDR4X 16gb 4266MHz</td>
              </tr>
              <tr>
                <th align="left">
                  저장용량
                  <div
                    className="vector_img"
                    onmouseover="showText(3)"
                    onmouseout="hideText(3)"
                  >
                    <img src="/assets/item/Vector.png" alt="부연설명" />
                    <span id="desc3" className="vector_description">
                      저장용량은 노예들이 일해서 얻은 식량을 저장하는 창고를
                      의미합니다.
                    </span>
                  </div>
                </th>
                <td>500GB</td>
              </tr>
              <tr>
                <th align="left">
                  해상도
                  <div
                    className="vector_img"
                    onmouseover="showText(4)"
                    onmouseout="hideText(4)"
                  >
                    <img src="/assets/item/Vector.png" alt="부연설명" />
                    <span id="desc4" className="vector_description">
                      해상도
                    </span>
                  </div>
                </th>
                <td>1920 X 1080(FHD) 250nit</td>
              </tr>
              <tr>
                <th align="left">
                  그래픽
                  <div
                    className="vector_img"
                    onmouseover="showText(5)"
                    onmouseout="hideText(5)"
                  >
                    <img src="/assets/item/Vector.png" alt="부연설명" />
                    <span id="desc5" className="vector_description">
                      그래픽은 화면에 보여지는 선명도를 나타냅니다.
                    </span>
                  </div>
                </th>
                <td>내장그래픽(Iris XE)</td>
              </tr>
              <tr>
                <th align="left">
                  배터리
                  <div
                    className="vector_img"
                    onmouseover="showText(6)"
                    onmouseout="hideText(6)"
                  >
                    <img src="/assets/item/Vector.png" alt="부연설명" />
                    <span id="desc6" className="vector_description">
                      배터리
                    </span>
                  </div>
                </th>
                <td>80wh</td>
              </tr>
              <tr>
                <th align="left">
                  운영체제
                  <div
                    className="vector_img"
                    onmouseover="showText(7)"
                    onmouseout="hideText(7)"
                  >
                    <img src="/assets/item/Vector.png" alt="부연설명" />
                    <span id="desc7" className="vector_description">
                      운영체제
                    </span>
                  </div>
                </th>
                <td>FreeDOS</td>
              </tr>
              <tr>
                <th align="left">
                  무게
                  <div
                    className="vector_img"
                    onmouseover="showText(8)"
                    onmouseout="hideText(8)"
                  >
                    <img src="/assets/item/Vector.png" alt="부연설명" />
                    <span id="desc8" className="vector_description">
                      무게
                    </span>
                  </div>
                </th>
                <td>1.14kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="price_info">
          <div className="min_date">03/29 최저가</div>
          <h3 className="price">1,341,350원</h3>
        </div>
        <div className="btns">
          <a href="#a" className="btn1">
            장바구니 담기
          </a>
          <a href="#a" className="btn2">
            구매하기
          </a>
        </div>
      </div>
    </>
  );
}

export default ItemDetailPage;
