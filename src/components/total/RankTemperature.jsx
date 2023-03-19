import { useGetOndoRank } from "apis/useGetOndoRank";
import RankItem from "components/RankItem";
import React from "react";

const RankTemperature = () => {
  const { users } = useGetOndoRank();
  return (
    <>
      {users?.map((user, index) => (
        <RankItem
          rankNum={index + 1}
          rankText={user.name}
          rankCount={user.ondo}
          countUnit="도"
          isLink={true}
          to={`/personal/${user.name}`}
        />
      ))}
    </>
  );
};

export default RankTemperature;
