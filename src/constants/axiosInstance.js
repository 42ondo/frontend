import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // 토큰 에러 응답시 로그인 페이지로 리다이렉트
      window.location.href = "/";
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
