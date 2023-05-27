import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../assets/css/ai-mode-select.css";

function AIModeSelectPage(props) {
  const navigate = useNavigate();
  const handleBackArrowClick = () => navigate(-1);

  const [selectedButton, setSelectedButton] = useState("ai");

  function handleAIButtonClick(buttonId) {
    setSelectedButton(buttonId);
  }

  return (
    <div className="container">
      <IoIosArrowBack
        size="1.8rem"
        className="ai-mode-arrow-icon"
        onClick={handleBackArrowClick}
      />

      <h1 className="ai-mode-select-title">
        원하는 사용 방식을
        <br />
        선택하세요.
      </h1>

      <section className="center-container">
        <div>
          <div
            className={
              selectedButton === "ai" ? "ai-button select" : "ai-button "
            }
            onClick={() => handleAIButtonClick("ai")}
          >
            AI추천 모드
          </div>
          <div
            className={
              selectedButton === "general" ? "ai-button select" : "ai-button "
            }
            onClick={() => handleAIButtonClick("general")}
          >
            일반 모드
          </div>
        </div>

        <div className="bottom-container">
          <div className="hint-text">
            마이페이지, 환경설정에서 변경 가능합니다
          </div>

          <button type="submit" className="complete-button">
            선택완료
          </button>
        </div>
      </section>
    </div>
  );
}

export default AIModeSelectPage;
