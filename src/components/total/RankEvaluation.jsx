import { useGetEvalRank } from "apis/useGetEvalRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import React from "react";

const RankEvaluation = () => {
  const { words } = useGetEvalRank();
  return (
    <RankCard title="Evaluation RANK">
      {words?.map((word, index) => (
        <RankItem
          rankNum={index + 1}
          rankText={word.word}
          rankCount={word.count}
          countUnit="회"
        />
      ))}
    </RankCard>
  );
};

export default RankEvaluation;
