import axios from "axios";
import { getCookie } from "../utils/cookie";

const REACT_APP_SPRING_BOOT_API_URL = process.env.REACT_APP_USER_API_URL;

export async function getMyProfile() {
  console.log(getCookie("access_token"));
  const response = await axios.get(`${REACT_APP_SPRING_BOOT_API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${getCookie("access_token")}`,
    },
  });

  return response;
}
