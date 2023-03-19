import { useApi } from "hooks/useApi";

export const useGetOndoRank = () => {
  const { useGet } = useApi();

  const { data } = useGet(
    "ondo/rank",
    "ondo/rank",
    { count: 5 },
    { onSuccess: (response) => response.data }
  );

  return { users: data?.users };
};
