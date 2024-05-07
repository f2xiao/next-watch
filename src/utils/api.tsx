export const API_URL = "http://localhost:8080/";
const setToken = (newToken: string | null) => {
  return `Bearer ${newToken}`;
};

export const config = {
  headers: {
    Authorization: `${setToken(localStorage.getItem("authToken"))}`,
  },
};
