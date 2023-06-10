import axios from "axios";

const REACT_APP_SPRING_BOOT_API_URL = process.env.REACT_APP_USER_API_URL;

export async function socialLogin(provider, code) {
  const response = await axios.get(
    `${REACT_APP_SPRING_BOOT_API_URL}/${provider}?code=${code}`
  );

  return response;
}
