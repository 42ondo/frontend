import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

export const useGetEvalName = () => {
  const { userName } = useParams();
  const { useGet } = useApi();
  const { data } = useGet("evalName", `eval/${userName}`, undefined, {
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
