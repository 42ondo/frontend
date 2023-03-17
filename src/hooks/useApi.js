import useAxios from "./useAxios";
import { useQuery } from "react-query";

const useApi = () => {
  const { get } = useAxios();

  /*
  params
    suspense: react-query suspense 설정,
    config: AxiosRequestConfig
  */
  const useGet = (key, url, data, { onSuccess, onError, config, suspense }) =>
    useQuery(key, () => get(url, data, config).then(onSuccess).catch(onError), {
      suspence: suspense,
    });

  return { useGet };
};

export default useApi;
