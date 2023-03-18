import { useApi } from "../hooks/useApi";

const useGetOndoAverage = () => {
  const { useGet } = useApi();
  const { data } = useGet("ondo/average", "ondo/average", undefined, {
    onSuccess: (response) => response.data,
  });

  return { degree: parseInt(data?.ondo) ?? 0 };
};

export default useGetOndoAverage;
