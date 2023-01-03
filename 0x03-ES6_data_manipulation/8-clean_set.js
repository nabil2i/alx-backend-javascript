export default function cleanSet(set, startString) {
  const myArray = [];
  if (typeof set !== 'object' || typeof startString !== 'string'
  || startString.length === 0) {
    return '';
  }
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      myArray.push(item.slice(startString.length));
    }
  }
  return myArray.join('-');
}
