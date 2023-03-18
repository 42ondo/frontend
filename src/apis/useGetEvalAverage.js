import { useApi } from "../hooks/useApi";

export const useGetEvalAverage = () => {
  const { useGet } = useApi();
  const { data } = useGet("evalAverage", "eval/average", undefined, {
    onSuccess: (response) => response.data,
  });

  return {
    evalCnt: data?.evalCnt,
    timeSpentAll: data?.timeSpentAll,
    timeZoneLike: data?.timeZoneLike,
    mostSubject: data?.mostSubject,
  };
};
