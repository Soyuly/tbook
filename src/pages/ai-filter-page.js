import React from "react";
import "../assets/css/filter.css";
import { useState } from "react";
import { filterQuestion } from "./../utils/question";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function AiFilterPage() {
  const navigate = useNavigate();
  const [current, setCurret] = useState(0);
  const divRef = useRef(null);

  function handleNextButtonClick() {
    if (current + 1 < filterQuestion.length) {
      setCurret(current + 1);
      divRef.current.style.width = `${(current + 1) * 16.6}%`;
    } else {
      navigate("/recommend");
    }
  }

  function handlePrevButtonClick() {
    if (current >= 1) {
      setCurret(current - 1);
      divRef.current.style.width = `${(current - 1) * 16.6}%`;
    }
  }

  return (
    <div className="filter-all-container">
      <div className="filter-header">
        <div className="headerUp">
          <div className="preButton">
            <img
              src="/assets/item/Left Actionable.png"
              alt="뒤로가기"
              onClick={handlePrevButtonClick}
            />
          </div>
        </div>

        <div className="headerDown">
          <div className="progress-bar-container">
            <div className="progress-bar" ref={divRef}></div>
          </div>
        </div>
      </div>

      <div className="filter-select">
        <div className="filter-text">{filterQuestion[current].question}</div>
        {filterQuestion[current].answer.map((item, index) => (
          <>
            <div className="selectButton" key={index}>
              {item}
            </div>
          </>
        ))}
      </div>
      <div className="nextButton-container">
        <div className="nextButton" onClick={handleNextButtonClick}>
          다음으로
        </div>
      </div>
    </div>
  );
}

export default AiFilterPage;
