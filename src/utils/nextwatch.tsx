import axios from "axios";
import { API_URL } from "./api";
import { config } from "./api";

const baseUrl = `${API_URL}/api/nextwatches`;

export const getAll = async () => await axios.get(`${baseUrl}`, config);

export const getOneByWatchId = async (id: string) =>
  await axios.get(`${baseUrl}/watch/${id}`, config);

export const createOne = async (obj: { watch_id: string }) =>
  await axios.post(`${baseUrl}`, obj, config);

export const deleteOne = async (id: string) =>
  await axios.delete(`${baseUrl}/${id}`, config);

export const updateNextwatchRating = async (
  id: string,
  obj: {
    rating: string;
  }
) => await axios.put(`${baseUrl}/${id}`, obj, config);
