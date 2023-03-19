import { useParams } from "react-router-dom";
import { useApi } from "hooks/useApi";

export const useGetEvalName = () => {
  const { name } = useParams();
  const { useGet } = useApi();
  const { data } = useGet("evalName", `eval/${name}`, undefined, {
    onSuccess: (response) => response.data,
  });

  return {
    evalCnt: data?.evalCnt,
    timeSpentAll: data?.timeSpentAll,
    timeZoneLike: data?.timeZoneLike,
    mostSubject: data?.mostSubject,
    evalRatio: data?.evalRatio,
  };
};
