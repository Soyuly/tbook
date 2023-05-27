import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function signup(user) {
  const response = await axios.post(`${API_URL}/user/signup`, user);

  return response;
}
