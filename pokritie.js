allStudents = require("./students.json");

function compareNumbers(a, b) {
  return a - b;
}

function maxScoreFinding(studentsGroup) {
  let scoreArray = [];
  for (let i in studentsGroup) {
    scoreArray.push(studentsGroup[i].score);
  }
  scoreArray.sort(compareNumbers);
  return scoreArray.pop()
}

function maxScoreStudentFinding(studentsGroup) {
  let maxScore = maxScoreFinding(studentsGroup);
  let result = [];
  if (maxScore != 0){
  studentsGroup.forEach((student) => {
    if (student.score === maxScore) {
      result.push(
        `Максимальное количество баллов: ${student.name} - ${maxScore}`
      )
    }})
      } else {
        result.push(`Количество баллов всех студентов группы = 0`);
    };
  console.log(result);
  return result;
};

console.log(maxScoreFinding(allStudents[0]));
maxScoreStudentFinding(allStudents[0]);

module.exports = maxScoreStudentFinding;
