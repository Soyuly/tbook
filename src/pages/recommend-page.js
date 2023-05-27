import React from "react";
import "../assets/css/recommend.css";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";
function RecommendPage(props) {
  const [current, setCurrent] = useState(0);

  function handleLeftSwipe() {
    console.log(test.length);
    if (current + 1 < test.length) setCurrent(current + 1);
  }

  function handleRightSwipe() {
    if (current >= 1) setCurrent(current - 1);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleLeftSwipe(),
    onSwipedRight: () => handleRightSwipe(),
  });

  const test = [
    "LG전자 2022 그램15(12세대)",
    "삼성 노트북 이온2",
    "HP X13",
    "HP 스펙터",
    "맥북 프로",
  ];

  return (
    <div>
      <div className="recommend-header">
        <div className="headerUp">
          <div className="preButton">
            <img src="/assets/item/Left Actionable.png" alt="이전버튼" />
          </div>
        </div>
      </div>

      <div className="recommend-text">
        트북이의 <br />
        추천🎵
      </div>

      <div className="mainPage">
        <div className="mainSlidePage" {...handlers}>
          <div className="imageWrapper">
            <img
              src="/assets/item/item-image.png"
              alt="노트북"
              className="notebok-recommend-image"
            />
          </div>
          <div className="imageTextWrapper">{test[current]}</div>
        </div>

        <div className="progressBar">
          {test.map((item, index) => (
            <div
              className={current === index ? "circle light" : "circle"}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecommendPage;
