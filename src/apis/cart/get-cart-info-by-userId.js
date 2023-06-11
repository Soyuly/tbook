import axios from "axios";

const CART_GET_API_URL = process.env.REACT_APP_CART_API_URL;

export async function getProductCartByUserId(userId) {
  try {
    const response = await axios.get(`${CART_GET_API_URL}/${userId}/carts`);
    return response;
  } catch (error) {
    console.error("Server Error : ", error.code);
  }
}
