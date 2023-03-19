import React from "react";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import { useGetWordRankName } from "apis/useGetWordRankName";
import { formatNumberThousands } from "utils/convertNumber";
import CustomSpinner from "components/CustomSpinner";

const MostUsed = () => {
  const { words, isLoading } = useGetWordRankName();
  return (
    <RankCard
      title="most used"
      className="most-used"
      label="평가에서 가장 많이 사용하신 단어 랭킹입니다"
    >
      {isLoading ? (
        <CustomSpinner />
      ) : (
        words?.map((word, index) => (
          <RankItem
            key={word.word}
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

export default MostUsed;
