import React, { useState, useEffect } from "react";

import "../assets/css/mypage/index.css";
import "../assets/css/mypage/middle_wrapper.css";
import "../assets/css/mypage/mypage.css";
import "../assets/css/mypage/setting_list.css";
import AppBar from "../components/common/app-bar.js";
import { useNavigate } from "react-router-dom";
import {
  ListOutline,
  PersonCircleOutline,
  SettingsOutline,
  KeyOutline,
  TrashBinOutline,
  ConstructOutline,
} from "react-ionicons";
import { removeCookie } from "../utils/cookie";
import { getMyProfile } from "../apis/get_my_profile-api";

function MyPage() {
  const userEmail = "gildong@naver.com"; // 변경 필요
  const userName = "전병규"; // 변경 필요
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    getMyProfile()
      .then((res) => {
        setUserInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogoutClick = () => {
    // 로그아웃 로직
    removeCookie("access_token");
    localStorage.removeItem("userId");

    // 알림 처리
    alert("로그아웃이 완료되었습니다.");

    // "/"로 이동
    navigate("/");
  };

  const handleAddressSettingClick = () => {
    // 주소 설정 로직
    alert("추후 오픈 예정입니다.");
  };

  const handleSettingItemClick = () => {
    // 설정 항목 클릭 로직
    alert("추후 오픈 예정입니다.");
  };

  return (
    <div className="container">
      <header>
        <AppBar appBarName={"마이페이지"} navigateTo={"/"} />
      </header>

      <div className="mypage">
        <div className="user_info_container">
          <div className="user_info-content">
            <div className="user_info-email">{userInfo.email}</div>
            <div className="user_info-name">
              {userInfo.name}
              <span>&nbsp;&nbsp;고객님</span>
            </div>
          </div>
          <div className="user_info-logout-btn" onClick={handleLogoutClick}>
            로그아웃
          </div>
        </div>
      </div>

      <div className="mypage_middle_warpper">
        <div className="address_setting" onClick={handleAddressSettingClick}>
          <i className="fa-solid fa-location-dot fa-xl"> </i>
          <div>주소 설정</div>
        </div>
        <div className="order_list">
          <i className="fa-regular fa-rectangle-list fa-xl"></i>
          <div
            onClick={() =>
              navigate("/orderInfo/" + localStorage.getItem("userId"))
            }
          >
            주문 목록
          </div>
        </div>
      </div>

      <div className="seperate-box"></div>

      <div className="mypage_setting-list">
        <div
          className="mypage_setting-announce"
          onClick={handleSettingItemClick}
        >
          <ListOutline name="chevron-forward-outline"></ListOutline>
          <span>공지사항</span>
        </div>
        <div className="mypage_setting-cs" onClick={handleSettingItemClick}>
          <PersonCircleOutline name="chevron-forward-outline"></PersonCircleOutline>
          <span>고객센터</span>
        </div>

        <div className="mypage_setting-env" onClick={handleSettingItemClick}>
          <ConstructOutline name="chevron-forward-outline"></ConstructOutline>
          <span>환경 설정</span>
        </div>
        <div
          className="mypage_setting-password"
          onClick={handleSettingItemClick}
        >
          <KeyOutline></KeyOutline>
          <span>비밀번호 변경</span>
        </div>
        <div
          className="mypage_setting-withdrawal"
          onClick={handleSettingItemClick}
        >
          <TrashBinOutline name="chevron-forward-outline"></TrashBinOutline>
          <span>회원 탈퇴</span>
        </div>
        <div
          className="mypage_setting-version"
          onClick={handleSettingItemClick}
        >
          <SettingsOutline></SettingsOutline>
          <span>버전 정보</span>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
