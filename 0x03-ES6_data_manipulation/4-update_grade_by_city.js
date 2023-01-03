import getStudentByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const listStudents = getStudentByLocation(getListStudents, city);
  return listStudents.map((obj) => {
    const filter = newGrades.filter((grade) => grade.studentId === obj.id);
    let grade;
    if (filter[0]) {
      grade = filter[0].grade;
    } else {
      grade = 'N/A';
    }

    return { ...obj, grade };
  });
}
