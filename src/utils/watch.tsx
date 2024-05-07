import axios from "axios";
import { API_URL } from "./api";
import { config } from "./api";

const baseUrl = `${API_URL}/api/watches`;

export const getOne = async (id: string | undefined) =>
  await axios.get(`${baseUrl}/${id}`, config);

export const getAll = async () => await axios.get(`${baseUrl}`, config);
