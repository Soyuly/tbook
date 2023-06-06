import axios from "axios";

const REACT_APP_SPRING_BOOT_API_URL = process.env.REACT_APP_SPRING_BOOT_API_URL;

export async function getProductsByFilter(pageNum, madeBy, price, weight) {
  try {
    let url = `${REACT_APP_SPRING_BOOT_API_URL}/product-service/products/filter/?page=${pageNum}`;

    if (madeBy.length !== 0) {
      for (let item of madeBy) {
        url += `&productMadeBy=${item}`;
      }
    }

    if (price !== null) {
      url += `&productPriceRange=${price}`;
    }

    if (weight !== null) {
      url += `&productWeightRange=${weight}`;
    }

    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error("제품 정보를 가져오는데 실패했습니다.", error);
  }
}
