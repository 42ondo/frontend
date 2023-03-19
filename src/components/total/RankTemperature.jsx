import React from "react";
import { useGetOndoRank } from "apis/useGetOndoRank";
import RankItem from "components/RankItem";
import { roundNumber } from "utils/convertNumber";

const RankTemperature = () => {
  const { users } = useGetOndoRank();
  return (
    <>
      {users?.map((user, index) => (
        <RankItem
          rankNum={index + 1}
          rankText={user.name}
          rankCount={roundNumber(user.ondo, 2)}
          countUnit="도"
          isLink={true}
          to={`/personal/${user.name}`}
        />
      ))}
    </>
  );
};

export default RankTemperature;
