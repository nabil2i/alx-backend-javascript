export default function getStudentByLocation(getListStudents, city) {
  return getListStudents.filter((obj) => obj.location === city);
}
