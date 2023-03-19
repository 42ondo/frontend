import { useApi } from "hooks/useApi";
import { parseTemperature } from "utils/convertNumber";

const useGetOndoAverage = () => {
  const { useGet } = useApi();
  const { data } = useGet("ondo/average", "ondo/average", undefined, {
    onSuccess: (response) => response.data,
  });

  return { degree: parseTemperature(data?.ondo) };
};

export default useGetOndoAverage;
