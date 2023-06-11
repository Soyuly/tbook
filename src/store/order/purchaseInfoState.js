// src/store/order/purchaseInfoState.js
import { atom } from "recoil";

const purchaseInfoState = atom({
  key: "purchaseInfoState",
  default: [],
});

export default purchaseInfoState;
