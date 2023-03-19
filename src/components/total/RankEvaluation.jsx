import { useGetEvalRank } from "apis/useGetEvalRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import React from "react";
import { formatNumberThousands } from "utils/convertNumber";

const RankEvaluation = () => {
  const { evals } = useGetEvalRank();
  return (
    <RankCard title="Evaluation RANK" label="전체 유저의 평가 횟수 랭킹입니다">
      {evals?.map((evalData, index) => (
        <RankItem
          rankNum={index + 1}
          rankText={evalData.userName}
          rankCount={formatNumberThousands(evalData.count)}
          countUnit="회"
          isLink={true}
          to={`/personal/${evalData.userName}`}
        />
      ))}
    </RankCard>
  );
};

export default RankEvaluation;
