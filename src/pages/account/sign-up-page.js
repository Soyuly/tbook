import React, { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signup } from "../../apis/signup-api";
import "../../assets/css/signup.css";
import { signupInfoState } from "../../store/signup-info";
function SignUpPage() {
  const navigate = useNavigate();

  const [signupInfo, setSignupInfo] = useRecoilState(signupInfoState);
  const confirmPasswordRef = useRef(null);
  const handleBackArrowClick = () => navigate(-1);

  /**
   * input change event 감지
   */
  function handleChange(event, fn) {
    setSignupInfo((prevState) => ({
      ...prevState,
      [fn]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validation()) {
      signup(signupInfo)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          console.log("에러", err.response.data.msg);
          alert(err.response.data.msg);
        });
    }
  }

  function validation() {
    if (signupInfo.password !== confirmPasswordRef.current.value) {
      alert("비밀번호가 일치하지않습니다. 다시 확인해주세요.");
      return false;
    }

    return true;
  }

  return (
    <div className="signup-container">
      <IoIosArrowBack
        size="1.8rem"
        className="arrow-icon"
        onClick={handleBackArrowClick}
      />

      <h1 class="title">
        트북이 서비스 이용을 위해서
        <br /> 고객님의 정보가 필요해요.
      </h1>

      <form action="#" method="post" onSubmit={handleSubmit}>
        {/* 이메일 입력 */}
        <div className="input-item">
          <span className="input-label">이메일</span>
          <input
            type="email"
            className="input-style"
            placeholder="예) test@test.com"
            onChange={(event) => handleChange(event, "email")}
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="input-item">
          <span className="input-label">비밀번호</span>
          <input
            type="password"
            className="input-style"
            onChange={(event) => handleChange(event, "password")}
          />
        </div>

        {/* 비밀번호 확인 입력 */}
        <div className="input-item">
          <span className="input-label">비밀번호 확인</span>
          <input
            type="password"
            className="input-style"
            ref={confirmPasswordRef}
          />
        </div>

        {/* 이름 입력 */}
        <div className="input-item">
          <span className="input-label">이름</span>
          <input
            type="text"
            className="input-style"
            placeholder="예) 홍길동"
            onChange={(event) => handleChange(event, "name")}
          />
        </div>

        {/* 주소 입력 */}
        <div className="input-item">
          <span className="input-label">주소</span>
          <input
            type="text"
            className="input-style"
            placeholder="예) 진주시 가좌동"
            onChange={(event) => handleChange(event, "address")}
          />
        </div>

        {/* 전화번호 입력 */}
        <div className="input-item">
          <span className="input-label">전화번호</span>
          <input
            type="text"
            className="input-style"
            placeholder="예) 010-1234-1234"
            onChange={(event) => handleChange(event, "phone")}
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
