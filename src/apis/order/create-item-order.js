import axios from "axios";

const ORDER_API_URL = process.env.REACT_APP_ORDER_API_URL;

export async function createItemOrder(userId, order) {
  try {
    const response = await axios.post(`${ORDER_API_URL}/${userId}/order`, {
      items: order.items,
    });

    return response;
  } catch (error) {
    console.error("주문 등록에 실패했습니다.", error);
  }
}
