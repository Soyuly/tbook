import axios from "axios";

const CART_GET_API_URL = process.env.REACT_APP_CART_API_URL;

export async function deleteCartItem(cartId) {
  try {
    const response = await axios.delete(`${CART_GET_API_URL}/${cartId}/carts`);

    return response;
  } catch (error) {
    console.error("장바구니 삭제에 실패했습니다.", error);
  }
}
