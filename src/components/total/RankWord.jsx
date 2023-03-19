import { useGetWordRank } from "apis/useGetWordRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import React from "react";
import { formatNumberThousands } from "utils/convertNumber";

const RankWord = () => {
  const { words } = useGetWordRank();
  return (
    <RankCard
      title="Word RANK"
      label="평가 로그에서 많이 사용된 단어 랭킹 입니다"
    >
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
