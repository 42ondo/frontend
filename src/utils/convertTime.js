export function convertSecondsToTime(minutes) {
  const hour = Math.floor(minutes / 60);
  const minute = Math.floor(minutes % 60);
  return { hour, minute };
}

export function convertTimeString(minutes) {
  const { hour, minute } = convertSecondsToTime(minutes);
  return `${hour}시간 ${minute}분`;
}
