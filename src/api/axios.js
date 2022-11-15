import axios from "axios";
const BASE_URL = "https://10.10.30.72";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
