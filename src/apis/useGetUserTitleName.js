import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

export const useGetUserTitleName = () => {
  const { userName } = useParams();
  const { useGet } = useApi();

  const { data } = useGet("userTitle", `user/title/${userName}`, undefined, {
    onSuccess: (response) => response.data,
  });
  return { title: data?.title };
};
