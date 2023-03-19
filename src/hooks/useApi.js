import useAxios from "./useAxios";
import { useQuery } from "react-query";
import { useToast } from "@chakra-ui/react";

export const useApi = () => {
  const { get } = useAxios();
  const toast = useToast();

  const displayErrorToast = (error) => {
    toast({
      title: "예상치 못한 오류가 발생했습니다.",
      description: error.message,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };
  /*
  params
    suspense: react-query suspense 설정,
    config: AxiosRequestConfig
  */
  const useGet = (key, url, data, { onSuccess, config, suspense }) =>
    useQuery(
      key,
      () => get(url, data, config).then(onSuccess).catch(displayErrorToast),
      {
        suspence: suspense,
      }
    );

  return { useGet };
};
