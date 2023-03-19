export const roundNumber = (num, precision = 0) => {
  const factor = Math.pow(10, precision);
  const rouned = Math.round(num * factor) / factor;
  return rouned?.toFixed(precision);
};

export const formatNumberThousands = (number) => {
  if (typeof number !== "number") {
    let parsedNumber = parseInt(number, 10);
    return isNaN(parsedNumber) ? number : parsedNumber?.toLocaleString();
  }
  return number?.toLocaleString();
};
