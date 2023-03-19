import { useGetEvalRank } from "apis/useGetEvalRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import React from "react";
import { formatNumberThousands } from "utils/convertNumber";

const RankEvaluation = () => {
  const { evals } = useGetEvalRank();
  return (
    <RankCard title="Evaluation RANK">
      {evals?.map((evalData, index) => (
        <RankItem
          rankNum={index + 1}
          rankText={evalData.userName}
          rankCount={formatNumberThousands(evalData.count)}
          countUnit="회"
        />
      ))}
    </RankCard>
  );
};

export default RankEvaluation;
