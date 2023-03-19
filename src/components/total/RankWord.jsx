import { useGetWordRank } from "apis/useGetWordRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import React from "react";
import { formatNumberThousands } from "utils/convertNumber";

const RankWord = () => {
  const { words } = useGetWordRank();
  return (
    <RankCard title="Word RANK">
      {words?.map((word, index) => (
        <RankItem
          rankNum={index + 1}
          rankText={word.word}
          rankCount={formatNumberThousands(word.count)}
          countUnit="회"
        />
      ))}
    </RankCard>
  );
};

export default RankWord;
