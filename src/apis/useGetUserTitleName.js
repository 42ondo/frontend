import { useParams } from "react-router-dom";
import { useApi } from "hooks/useApi";

export const useGetUserTitleName = () => {
  const { name } = useParams();
  const { useGet } = useApi();

  const { data } = useGet("userTitle", `user/title/${name}`, undefined, {
    onSuccess: (response) => response.data,
  });
  return { title: data?.title };
};
