import { useGetEvalRank } from "apis/useGetEvalRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import React from "react";

const RankEvaluation = () => {
  const { evals } = useGetEvalRank();
  return (
    <RankCard
      title="Evaluation RANK"
      label="전체 유저의 이번주 평가 횟수 랭킹입니다"
    >
      {evals?.map((evalData, index) => (
        <RankItem
          rankNum={index + 1}
          rankText={evalData.userName}
          rankCount={evalData.count}
          countUnit="회"
        />
      ))}
    </RankCard>
  );
};

export default RankEvaluation;
