import { axiosInstance } from "constants/axiosInstance";

const useAxios = () => {
  const get = (url, data, config) =>
    axiosInstance.get(url, { params: data, ...config });
  return { get };
};

export default useAxios;
