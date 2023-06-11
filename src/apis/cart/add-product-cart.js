import axios from "axios";

const CART_GET_API_URL = process.env.REACT_APP_CART_API_URL;

export async function addProductCart(userId, productId) {
  try {
    const response = await axios.post(`${CART_GET_API_URL}/${userId}/carts`, {
      productId: productId,
    });
    return response;
  } catch (error) {
    console.error("장바구니 추가에 실패했습니다.", error);
  }
}
