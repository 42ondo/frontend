import { useParams } from "react-router-dom";
import { useApi } from "hooks/useApi";

export const useGetWordRankName = () => {
  const { name } = useParams();
  const { useGet } = useApi();
  const { data } = useGet("word/rank/name", `word/rank/${name}`, undefined, {
    onSuccess: (response) => response.data,
  });
  return { words: data?.words };
};
