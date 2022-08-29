import axios from "axios";
const url = "http://localhost:8000";

export async function useSessionLogin() {
  return await axios.get(`${url}/auth`);
}
