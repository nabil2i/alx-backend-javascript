interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Wahida",
  lastName: "Wahida",
  age: 21,
  location: "Nigeria",
};

const student2: Student = {
  firstName: "Umar",
  lastName: "Umar",
  age: 28,
  location: "Senegal",
};

let studentsList: Student[] = [student1, student2];
const myTable = document.createElement('table');
document.body.appendChild(myTable);
for (let i = 0; i <= studentsList.length - 1; i++) {
  const tr = document.createElement('tr');
  myTable.appendChild(tr);
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  for (const elem in studentsList[i]) {
    if (elem === 'firstName') {
      td1.innerHTML = studentsList[i][elem];
    } else if (elem === 'location') {
        td2.innerHTML = studentsList[i][elem];
    }
  }
  tr.appendChild(td1);
  tr.appendChild(td2);
}
