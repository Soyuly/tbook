import React from "react";

import "../assets/css/mypage/index.css";
import "../assets/css/mypage/middle_wrapper.css";
import "../assets/css/mypage/mypage.css";
import "../assets/css/mypage/setting_list.css";
import AppBar from "../components/common/app-bar.js";
import {
  ListOutline,
  PersonCircleOutline,
  SettingsOutline,
  KeyOutline,
  TrashBinOutline,
  ConstructOutline,
} from "react-ionicons";

function MyPage() {
  const userEmail = "gildong@naver.com"; // 변경 필요
  const userName = "전병규"; // 변경 필요

  const handleBackIconClick = () => {
    // 뒤로가기 로직
  };

  const handleLogoutClick = () => {
    // 로그아웃 로직
  };

  const handleAddressSettingClick = () => {
    // 주소 설정 로직
  };

  const handleOrderListClick = () => {
    // 주문 목록 로직
  };

  const handleSettingItemClick = () => {
    // 설정 항목 클릭 로직
  };

  return (
    <div className="container">
      <header>
        <AppBar appBarName={"마이페이지"} />
      </header>

      <div className="mypage">
        <div className="user_info_container">
          <div className="user_info-content">
            <div className="user_info-email">{userEmail}</div>
            <div className="user_info-name">
              {userName}
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
        <div className="order_list" onClick={handleOrderListClick}>
          <i className="fa-regular fa-rectangle-list fa-xl"></i>
          <div>주문 목록</div>
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
