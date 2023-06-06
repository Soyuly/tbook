import React, { useEffect } from "react";
import "../assets/css/recommend.css";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";
import { productRecommendApi } from "../apis/product-recommend";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

function RecommendPage(props) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [aiResults, setAiResults] = useState([
    {
      product_id: 0,
      product_image: "",
      product_name: "",
      similarity: 0,
    },
  ]);

  function handleLeftSwipe() {
    console.log(aiResults.length);
    if (current + 1 < aiResults.length) setCurrent(current + 1);
  }

  function handleRightSwipe() {
    if (current >= 1) setCurrent(current - 1);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleLeftSwipe(),
    onSwipedRight: () => handleRightSwipe(),
  });

  useEffect(() => {
    const visitedList = JSON.parse(localStorage.getItem("visited")) || ["1"];
    const intVisitedList = visitedList.map((str) => parseInt(str, 10));

    productRecommendApi(intVisitedList)
      .then((res) => {
        setAiResults(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="recommend-header">
        <div className="headerUp">
          <div className="preButton">
            <img
              src="/assets/item/Left Actionable.png"
              alt="이전버튼"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </div>

      <div className="recommend-text">
        트북이의 <br />
        추천🎵
      </div>

      {loading && (
        <div className="loading-bar-container">
          <div style={{ marginBottom: "2rem" }}>
            <SyncLoader color="#74da50" loading={loading} />
          </div>
          <div className="loading-bar-text">트북이가 당신한테 맞는</div>
          <div className="loading-bar-text">노트북을 추천하고 있어요</div>
        </div>
      )}

      {!loading && (
        <div className="mainPage">
          <div className="mainSlidePage" {...handlers}>
            <div
              className="imageWrapper"
              onClick={() =>
                navigate("/detail/" + aiResults[current].product_id)
              }
            >
              <img
                src={aiResults[current].product_image}
                alt="노트북"
                className="notebok-recommend-image"
              />
            </div>
            <div className="imageTextWrapper">
              {aiResults[current].product_name}
            </div>
            <div class="similiality-text">
              추천 정확도 {aiResults[current].similarity}%
            </div>
          </div>

          <div className="progressBar">
            {aiResults.map((result, index) => (
              <div
                className={current === index ? "circle light" : "circle"}
                key={index}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecommendPage;
