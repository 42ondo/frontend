import { useParams } from "react-router-dom";
import { useApi } from "hooks/useApi";
import { parseTemperature } from "utils/convertNumber";

export const useGetUserName = () => {
  const { name } = useParams();
  const { useGet } = useApi();

  const { data, isLoading } = useGet("userName", `user/${name}`, undefined, {
    onSuccess: (response) => response.data,
  });

  return {
    id: data?.id,
    login: data?.login ?? name,
    ondo: parseTemperature(data?.ondo),
    isLoading,
  };
};
