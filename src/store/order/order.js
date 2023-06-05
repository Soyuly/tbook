import { atom } from "recoil";

const orderState = atom({
  key: "orderState",
  default: {
    userInfo: {
      name: "홍길동",
      phone: "010-1234-5678",
      address: "경남 진주시 가좌동 1234-5 (가좌동), 홍길빌 105호 [12345]",
    },
    orderItems: [
      { name: "LG전자 2022 그램15(12세대)", count: 1 },
      { name: "LG전자 2022 그램15(12세대)", count: 1 },
    ],
    totalProductAmount: 2682700,
    totalShippingCost: 2500,
    paymentMethod: "kakao",
  },
});

export default orderState;
