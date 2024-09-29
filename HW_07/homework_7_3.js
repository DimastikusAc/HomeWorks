function calculateAverageGrade(students) {
  let gradeStudents = [];

  for (j = 0; j < students.length; j++) {
    console.log(`${students[j].name} grade: ${students[j].grade}`);   
    
    gradeStudents.push(students[j].grade);
  }

  let averageGrade = 0;

  for (i = 0; i < gradeStudents.length; i++) {
  averageGrade += gradeStudents[i]/gradeStudents.length;
  }
  
  return averageGrade;
  // console.log (gradeStudents);
}

const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];


console.log("Середній бал студентів:", calculateAverageGrade(students).toFixed(1));