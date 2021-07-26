export function clamp(x, fromX, toX) {
  if (x < fromX) x = fromX;// eslint-disable-line no-param-reassign
  if (x > toX) x = toX;// eslint-disable-line no-param-reassign

  return x;
}
export default clamp;
