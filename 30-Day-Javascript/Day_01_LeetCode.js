// Student Grade Analyzer

// Step 1: Student Data
const students = [
  { name: "Aarav", marks: [85, 78, 92] },
  { name: "Riya", marks: [88, 90, 79] },
  { name: "Kabir", marks: [70, 68, 72] },
  { name: "Sita", marks: [95, 91, 89] },
];

// Step 2: Function to calculate average
function calculateAverage(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  return sum / marks.length;
}

// Step 3: Function to assign grade
function getGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}

// Step 4: Analyze students
let topper = null;
let highestAvg = 0;

for (let student of students) {
  const avg = calculateAverage(student.marks);
  const grade = getGrade(avg);

  console.log(`Name: ${student.name}`);
  console.log(`Average: ${avg.toFixed(2)}`);
  console.log(`Grade: ${grade}`);
  console.log("-----------------------");

  if (avg > highestAvg) {
    highestAvg = avg;
    topper = student.name;
  }
}

console.log(`🏆 Topper is ${topper} with average ${highestAvg.toFixed(2)}`);
