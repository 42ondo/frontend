export function convertSecondsToTime(seconds) {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  const second = seconds % 60;
  return { hour, minute, second };
}

export function convertTimeString(seconds) {
  const { hour, minute } = convertSecondsToTime(seconds);
  return `${hour}시간 ${minute}분`;
}
