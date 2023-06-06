import axios from "axios";

const REACT_APP_FAST_API_URL = process.env.REACT_APP_FAST_API_URL;

export async function productRecommendApi(userHistory) {
  try {
    const response = await axios.post(
      `${REACT_APP_FAST_API_URL}/api/v1/product/recommend`,
      {
        ids: userHistory,
      }
    );
    return response;
  } catch (error) {
    console.error("제품 정보를 가져오는데 실패했습니다.", error);
  }
}
