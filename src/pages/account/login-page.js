import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { socialLogin } from "../../apis/social-login-api";
import "../../assets/css/login.css";
import { setCookie } from "../../utils/cookie";
import { loginApi } from "../../apis/login-api";

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    if (code !== null) {
      socialLogin(localStorage.getItem("provider"), code)
        .then((res) => {
          console.log(res.data);
          const token = res.headers.getAuthorization().replace("Bearer ", "");
          setCookie("access_token", token);

          // 로컬 스토리지에 저장
          localStorage.setItem("userId", res.data.id);

          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }, []);

  /**
   * 구글 로그인 페이지를 여는 함수
   */
  function openGoogleLoginPage() {
    alert("구글 로그인 점검으로 추후 오픈 예정입니다.");
    // localStorage.setItem("provider", "google");
    // const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    // const redirectUri = "http://localhost:3000/login";
    // window.open(
    //   `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&&scope=email%20profile`,
    //   "_self"
    // );
  }

  function openKakaoLoginPage() {
    alert("카카오 로그인 점검으로 추후 오픈 예정입니다.");
    // localStorage.setItem("provider", "kakao");
    // const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
    // const redirectUri = "http://localhost:3000/login";

    // window.open(
    //   `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`,
    //   "_self"
    // );
  }

  //https://devtalk.kakao.com/t/401-unauthorized-no-body/127851/5
  function openNaverLoginPage() {
    alert("네이버 로그인 점검으로 추후 오픈 예정입니다.");
    // localStorage.setItem("provider", "naver");
    // const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
    // const redirectUri = "http://localhost:3000/login?";
    // const state = Math.random().toString(36);
    // window.open(
    //   `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}$state=${state}`,
    //   "_self"
    // );
  }

  async function login() {
    await loginApi(user)
      .then((res) => {
        const token = res.headers.getAuthorization().replace("Bearer ", "");
        setCookie("access_token", token);

        // 로컬 스토리지에 저장
        localStorage.setItem("userId", res.data.id);

        navigate("/");
      })
      .catch((err) => {
        alert("아이디 또는 비밀번호가 잘못됐습니다.");
      });
  }

  function handleChange(event, fn) {
    setUser((prevState) => ({
      ...prevState,
      [fn]: event.target.value,
    }));
  }

  return (
    <div className="login-container">
      <div className="signup-button-container">
        <img
          src="assets/item/logo.png"
          alt="트북이 로고"
          className="main-logo-image"
          onClick={() => navigate("/")}
        />

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
        <div>
          {/* 아이디 입력 */}
          <input
            type="text"
            placeholder="email"
            className="login-input"
            value={user.email}
            onChange={(event) => handleChange(event, "email")}
          />

          {/* 비밀번호 입력 */}
          <input
            type="password"
            placeholder="password"
            className="login-input"
            value={user.password}
            onChange={(event) => handleChange(event, "password")}
          />

          <div className="find-password-container">
            <a href="#" className="find-password">
              비밀번호를 잊어버리셨나요?
            </a>
          </div>

          <button type="submit" className="submit-button" onClick={login}>
            로그인
          </button>
        </div>

        <div className="social-login-container">
          {/* 카카오로그인 */}
          <div className="kakao-login-button" onClick={openKakaoLoginPage}>
            <img src="assets/icons/kakao.png" className="kakao-logo-style" />
            <span className="kakao-login-text">카카오 ID로 로그인하기</span>
          </div>

          {/* 네이버 로그인 */}
          <div className="naver-login-button" onClick={openNaverLoginPage}>
            <img src="assets/icons/naver.png" className="naver-logo-style" />
            <span className="naver-login-text">네이버 ID로 로그인하기</span>
          </div>

          {/* 구글로그인 */}
          <div className="google-login-button" onClick={openGoogleLoginPage}>
            <img src="assets/icons/google.png" className="google-logo-style" />
            <span className="google-login-text">구글 ID로 로그인하기</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
