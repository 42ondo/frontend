import { useParams } from "react-router-dom";
import { useApi } from "hooks/useApi";

export const useGetUserName = () => {
  const { name } = useParams();
  const { useGet } = useApi();

  const { data } = useGet("userName", `user/${name}`, undefined, {
    onSuccess: (response) => response.data,
  });

  return {
    id: data?.id,
    login: data?.login,
    ondo: data?.ondo,
  };
};
