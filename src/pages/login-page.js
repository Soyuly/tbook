import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="signup-button-container">
        <a href="/signup" className="go-to-signup">
          회원가입
        </a>
      </div>

      <section className="login-section">
        <h2 className="login-title">로그인</h2>
        <p className="login-sub-title">
          트북이의 더 많은 혜택과 정보를 얻으시려면
          <br /> 로그인이 필요합니다.
        </p>
        <form action="#" method="POST">
          {/* 아이디 입력 */}
          <input type="text" placeholder="email" className="login-input" />

          {/* 비밀번호 입력 */}
          <input type="text" placeholder="password" className="login-input" />

          <div className="find-password-container">
            <a href="#" className="find-password">
              비밀번호를 잊어버리셨나요?
            </a>
          </div>

          <button type="submit" className="submit-button">
            로그인
          </button>
        </form>

        <div className="social-login-container">
          {/* 카카오로그인 */}
          <div className="kakao-login-button">
            <img src="assets/icons/kakao.png" className="kakao-logo-style" />
            <span className="kakao-login-text">카카오 ID로 로그인하기</span>
          </div>

          {/* 구글로그인 */}
          <div className="google-login-button">
            <img src="assets/icons/google.png" className="google-logo-style" />
            <span className="google-login-text">구글 ID로 로그인하기</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
