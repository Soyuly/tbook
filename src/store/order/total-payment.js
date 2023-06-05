import { selector } from "recoil";
import orderState from "./order";

const totalPaymentAmountState = selector({
  key: "totalPaymentAmountState",
  get: ({ get }) => {
    const order = get(orderState);
    return order.totalProductAmount + order.totalShippingCost;
  },
});

export default totalPaymentAmountState;
