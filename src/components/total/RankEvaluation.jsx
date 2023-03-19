import { useGetEvalRank } from "apis/useGetEvalRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import React from "react";

const RankEvaluation = () => {
  const { evals } = useGetEvalRank();
  return (
    <>
      {evals?.map((evalData, index) => (
        <RankItem
          rankNum={index + 1}
          rankText={evalData.userName}
          rankCount={evalData.count}
          countUnit="회"
        />
      ))}
    </>
  );
};

export default RankEvaluation;
