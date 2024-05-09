import axios from "axios";
import { API_URL } from "./api";
import { config } from "./api";

const baseUrl = `${API_URL}/api/users`;

export const updateShare = async () =>
  // console.log(config);
  await axios.put(`${baseUrl}/share`, "", config);

export const getAllShared = async () =>
  await axios.get(`${baseUrl}/allshared`, config);

export const loginUser = async (obj: { username: string; password: string }) =>
  await axios.post(`${baseUrl}/login`, obj);

export const signupUser = async (obj: {
  username: string;
  password: string;
  email: string;
}) => await axios.post(`${baseUrl}/signup`, obj);

export const getOne = async () => await axios.get(`${baseUrl}`, config);
