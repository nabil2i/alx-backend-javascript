export default function getListStudentIds(arrayObjects) {
  if (!arrayObjects || typeof arrayObjects !== 'object') {
    return [];
  }
  else {
    const map1 = arrayObjects.map((obj) => obj.id);
    return map1;
  }
}
