import React from "react";
import { Spinner } from "@chakra-ui/react";
import { useGetOndoRank } from "apis/useGetOndoRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import { roundNumber } from "utils/convertNumber";

const RankTemperature = () => {
  const { users, isLoading } = useGetOndoRank();
  return (
    <RankCard
      title="Temperature RANK"
      label="특별(?)하게 산출된 온도 지표 랭킹 입니다"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        users?.map((user, index) => (
          <RankItem
            rankNum={index + 1}
            rankText={user.name}
            rankCount={roundNumber(user.ondo, 2)}
            countUnit="°C"
            isLink={true}
            to={`/personal/${user.name}`}
          />
        ))
      )}
    </RankCard>
  );
};

export default RankTemperature;
