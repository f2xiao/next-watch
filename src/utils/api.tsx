export const API_URL = process.env.API_URL;
const setToken = (newToken: string | null) => {
  return `Bearer ${newToken}`;
};

export const config = {
  headers: {
    Authorization: `${setToken(localStorage.getItem("authToken"))}`,
  },
};
