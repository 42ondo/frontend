export const roundNumber = (num, precision = 0) => {
  const factor = Math.pow(10, precision);
  const rounded = Math.round(num * factor) / factor;
  if (isNaN(rounded)) return "??";
  return rounded > 99.9 ? 99.9 : rounded?.toFixed(precision);
};

export const formatNumberThousands = (number) => {
  if (typeof number !== "number") {
    let parsedNumber = parseInt(number, 10);
    return isNaN(parsedNumber) ? number : parsedNumber?.toLocaleString();
  }
  return number?.toLocaleString();
};

export const parseTemperature = (ondo) => {
  return ondo > 0 ? ondo : 0;
};
