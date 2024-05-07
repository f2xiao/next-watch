import axios from "axios";
import { API_URL } from "./api";
import { config } from "./api";

const baseUrl = `${API_URL}/api/nextwatches`;

export const deleteOne = async (id: string) => {
  console.log(config);
  return await axios.delete(`${baseUrl}/${id}`, config);
};
type Obj = {
  rating: string;
};
export const updateNextwatchRating = async (id: string, obj: Obj) => {
  return await axios.put(`${baseUrl}/${id}`, obj, config);
};
