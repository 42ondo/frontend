export const timeToString = (hour) =>
  hour > 12 ? `오후 ${hour - 12}시` : `오전 ${hour}시`;
