import axios from "axios";
import { API_URL } from "./api";
import { config } from "./api";

const baseUrl = `${API_URL}/api/nextwatches`;

export const deleteOne = async (id: string) => {
  console.log(config);
  return await axios.delete(`${baseUrl}/${id}`, config);
};
