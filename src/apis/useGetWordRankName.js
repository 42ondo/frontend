import { useParams } from "react-router-dom";

import { useApi } from "../hooks/useApi";

export const useGetWordRankName = () => {
  const { userName } = useParams;
  const { useGet } = useApi();
  const data = useGet("word/rank/id", `word/rank/${userName}`, undefined, {
    onSuccess: (response) => response.data,
  });
  return { words: data?.words };
};
