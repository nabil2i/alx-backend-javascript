export default function getListStudents() {
  const stdudent1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };

  const stdudent2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };

  const stdudent3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  const listStudents = [stdudent1, stdudent2, stdudent3];
  return listStudents;
}
