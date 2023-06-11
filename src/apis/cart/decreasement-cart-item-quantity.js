import axios from "axios";

const CART_API_URL = process.env.REACT_APP_CART_API_URL;

export async function decreasementCartItemQuantity(cartId) {
  try {
    const response = await axios.patch(
      `${CART_API_URL}/carts/${cartId}/decreasement`
    );

    return response;
  } catch (error) {
    console.error("장바구니 상품 수량 증가에 실패했습니다.", error);
  }
}
