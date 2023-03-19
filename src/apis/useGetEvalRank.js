import { useApi } from "hooks/useApi";

export const useGetEvalRank = () => {
  const { useGet } = useApi();
  const { data } = useGet(
    "eval/rank",
    "eval/rank",
    { count: 5 },
    {
      onSuccess: (response) => response.data,
    }
  );
  return { evals: data?.evals };
};
