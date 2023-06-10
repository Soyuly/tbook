import axios from "axios";

// const REACT_APP_SPRING_BOOT_API_URL = process.env.REACT_APP_SPRING_BOOT_API_URL;
const REACT_APP_SPRING_BOOT_API_URL = process.env.REACT_APP_USER_API_URL;

export async function signup(user) {
  const response = await axios.post(
    `${REACT_APP_SPRING_BOOT_API_URL}/users`,
    user
  );

  return response;
}
