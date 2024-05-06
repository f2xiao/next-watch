import axios from "axios";
import { API_URL } from "./api";
import { config } from "./api";

const baseUrl = `${API_URL}/api/users`;

export const updateShare = async () => {
  console.log(config);
  return await axios.put(`${baseUrl}/share`, "", config);
};
