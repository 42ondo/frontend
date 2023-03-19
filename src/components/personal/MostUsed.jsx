import React from "react";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import { useGetWordRankName } from "apis/useGetWordRankName";
import styled from "@emotion/styled";

const Wrapper = styled(RankCard)``;

const MostUsed = () => {
  const { words } = useGetWordRankName();
  return (
    <Wrapper title="most used" className="most-used">
      {words?.map((word, index) => (
        <RankItem
          key={word.word}
          rankNum={index + 1}
          rankText={word.word}
          rankCount={word.count}
          countUnit="회"
        />
      ))}
    </Wrapper>
  );
};

export default MostUsed;
