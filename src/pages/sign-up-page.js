import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../assets/css/signup.css";
function SignUpPage() {
  const navigate = useNavigate();

  const handleBackArrowClick = () => navigate(-1);

  return (
    <div className="container">
      <IoIosArrowBack
        size="1.8rem"
        className="arrow-icon"
        onClick={handleBackArrowClick}
      />

      <h1 class="title">
        트북이 서비스 이용을 위해서
        <br /> 고객님의 정보가 필요해요.
      </h1>

      <form action="#" method="post">
        {/* 이메일 입력 */}
        <div className="input-item">
          <span className="input-label">이메일</span>
          <input
            type="email"
            className="input-style"
            placeholder="예) test@test.com"
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="input-item">
          <span className="input-label">비밀번호</span>
          <input type="password" className="input-style" />
        </div>

        {/* 비밀번호 확인 입력 */}
        <div className="input-item">
          <span className="input-label">비밀번호 확인</span>
          <input type="password" className="input-style" />
        </div>

        {/* 이름 입력 */}
        <div className="input-item">
          <span className="input-label">이름</span>
          <input type="text" className="input-style" placeholder="예) 홍길동" />
        </div>

        {/* 주소 입력 */}
        <div className="input-item">
          <span className="input-label">주소</span>
          <input
            type="text"
            className="input-style"
            placeholder="예) 진주시 가좌동"
          />
        </div>

        {/* 전화번호 입력 */}
        <div className="input-item">
          <span className="input-label">전화번호</span>
          <input
            type="text"
            className="input-style"
            placeholder="예) 010-1234-1234"
          />
        </div>

        <button type="submit" className="signup-submit-button">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
