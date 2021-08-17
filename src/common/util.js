export function clamp(x, fromX, toX) {
  if (x < fromX) x = fromX; // eslint-disable-line no-param-reassign
  if (x > toX) x = toX; // eslint-disable-line no-param-reassign

  return x;
}
export function animateEx(dx, startTime, currentTime, speed, looped = false) {
  const diff = currentTime - startTime;
  let time = (speed && diff / speed) || 0;
  if (looped) {
    time %= 1;
  } else if (time > 1) {
    time = 1;
  }
  return { offset: dx * time, progress: time };
}

const normalize = (num) => (num.toString().length > 1 ? num : `0${num}`);

export function getTime(date) {
  const convertDate = new Date(date);
  return `${normalize(convertDate.getHours())}:${normalize(convertDate.getMinutes())}:${normalize(
    convertDate.getSeconds(),
  )}`;
}
