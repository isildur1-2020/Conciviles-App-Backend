import axios from "axios";
import { variables } from "../config";

const { baseURL, apiKey } = variables;
export const axiosInstance = axios.create({
  baseURL,
  // timeout,
  headers: {
    "Content-Type": "application/json",
    Authorization: apiKey,
  },
});
