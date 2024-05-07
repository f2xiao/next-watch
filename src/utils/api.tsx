export const API_URL = "https://next-watch-backend.onrender.com";
const setToken = (newToken: string | null) => {
  return `Bearer ${newToken}`;
};

export const config = {
  headers: {
    Authorization: `${setToken(localStorage.getItem("authToken"))}`,
  },
};
