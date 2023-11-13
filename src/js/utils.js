const ids = [];

export function createID() {
  const res = `uid_${(Math.random() + 1).toString(36).substring(2)}`;
  if (ids.includes(res)) return createID();
  ids.push(res);
  return res;
}