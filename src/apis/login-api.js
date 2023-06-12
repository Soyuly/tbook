import axios from "axios";

const REACT_APP_SPRING_BOOT_API_URL = process.env.REACT_APP_USER_API_URL;

export async function loginApi(user) {
  console.log(user);
  const response = await axios.post(
    `${REACT_APP_SPRING_BOOT_API_URL}/login`,
    user
  );

  return response;
}
