export function convertSecondsToTime(minutes) {
  const hour = Math.floor(minutes / 60);
  const minute = Math.floor(minutes % 60);
  return { hour, minute };
}

export function convertTimeString(minutes) {
  let { hour, minute } = convertSecondsToTime(minutes);
  if (isNaN(hour)) hour = "??";
  if (isNaN(minute)) minute = "??";
  return `${hour}시간 ${minute}분`;
}
