import { useGetWordRank } from "apis/useGetWordRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import React from "react";

const RankWord = () => {
  const { words } = useGetWordRank();
  return (
    <RankCard title="Word RANK">
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

export default RankWord;
