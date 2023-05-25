import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function socialLogin(provider, code) {
  const response = await axios.get(`${API_URL}/user/${provider}?code=${code}`);

  return response;
}
