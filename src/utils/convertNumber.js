export const roundNumber = (num, precision = 0) => {
  const factor = Math.pow(10, precision);
  const rouned = Math.round(num * factor) / factor;
  return rouned?.toFixed(precision);
};

export const formatNumberThousands = (number) => {
  return number?.toLocaleString();
};
