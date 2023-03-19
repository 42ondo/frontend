import { useApi } from "hooks/useApi";

export const useGetWordRank = () => {
  const { useGet } = useApi();
  const { data } = useGet(
    "word/rank",
    "word/rank",
    { count: 5 },
    { onSuccess: (response) => response.data }
  );
  return { words: data?.words };
};
