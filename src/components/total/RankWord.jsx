import React from "react";
import { useGetWordRank } from "apis/useGetWordRank";
import { formatNumberThousands } from "utils/convertNumber";
import CustomSpinner from "components/CustomSpinner";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";

const RankWord = () => {
  const { words, isLoading } = useGetWordRank();
  return (
    <RankCard
      title="Word RANK"
      label="평가 로그에서 많이 사용된 단어 랭킹 입니다"
    >
      {isLoading ? (
        <CustomSpinner />
      ) : (
        words?.map((word, index) => (
          <RankItem
            rankNum={index + 1}
            rankText={word.word}
            rankCount={formatNumberThousands(word.count)}
            countUnit="회"
          />
        ))
      )}
    </RankCard>
  );
};

export default RankWord;
