export default function hasValuesFromArray(mySet, myArray) {
  return myArray.every((elem) => mySet.has(elem));
}
