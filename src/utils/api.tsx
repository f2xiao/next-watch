export const API_URL = import.meta.env.VITE_API_URL;
const setToken = (newToken: string | null) => {
  return `Bearer ${newToken}`;
};

export const config = {
  headers: {
    Authorization: `${setToken(localStorage.getItem("authToken"))}`,
  },
};
