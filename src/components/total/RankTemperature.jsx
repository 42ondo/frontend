import { useGetOndoRank } from "apis/useGetOndoRank";
import RankCard from "components/RankCard";
import RankItem from "components/RankItem";
import React from "react";

const RankTemperature = () => {
  const { users } = useGetOndoRank();
  return (
    <RankCard title="Temperature RANK">
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
    </RankCard>
  );
};

export default RankTemperature;
