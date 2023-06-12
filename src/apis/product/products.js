import axios from "axios";

const PRODUCT_GET_API_URL = process.env.REACT_APP_PRODUCT_API_URL;

export async function getProducts() {
  try {
    const response = await axios.get(PRODUCT_GET_API_URL);
    return response;
  } catch (error) {
    console.error("제품 정보를 가져오는데 실패했습니다.", error);
  }
}
