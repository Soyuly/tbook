import axios from "axios";

const REACT_APP_USER_API_URL = process.env.REACT_APP_ORDER_API_URL;

export async function getUserOrderInfo(userId) {
  try {
    const response = await axios.get(
      `${REACT_APP_USER_API_URL}/${userId}/orders`
    );
    return response;
  } catch (error) {
    console.error("Server Error : ", error.code);
  }
}
