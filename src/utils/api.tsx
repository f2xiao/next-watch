export const API_URL = "http://localhost:8080";
// export const API_URL = "https://next-watch-backend.onrender.com"; deployed backend url
const setToken = (newToken: string | null) => {
  return `Bearer ${newToken}`;
};

export const config = {
  headers: {
    Authorization: `${setToken(localStorage.getItem("authToken"))}`,
  },
};
