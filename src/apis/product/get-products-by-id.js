import axios from "axios";

const REACT_APP_SPRING_BOOT_API_URL = process.env.REACT_APP_SPRING_BOOT_API_URL;

export async function getProductsById(id) {
  try {
    const response = await axios.get(
      `${REACT_APP_SPRING_BOOT_API_URL}/product-service/${id}`
    );
    return response;
  } catch (error) {
    console.error("제품 정보를 가져오는데 실패했습니다.", error);
  }
}
