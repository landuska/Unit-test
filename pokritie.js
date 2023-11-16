// allStudents = require("./students.json");

// выстраиваем элементы в массиве по возрастанию
function compareNumbers(a, b) {
  return a - b;
}
// находим максимальное значение в массиве, функция возвращает это значение
function maxScoreFinding(studentsGroup) {
  let scoreArray = [];
  for (let i in studentsGroup) {
    scoreArray.push(studentsGroup[i].score);
  }
  scoreArray.sort(compareNumbers);
  return scoreArray.pop();
}

// Инициализируем переменную, которой присваиваем значение, получаемое из предыдущей ф-ии,
// проходим по элементам массива и сравниваем максимальное количество баллов со значениями в массиве
function maxScoreStudentFinding(studentsGroup) {
  let maxScore = maxScoreFinding(studentsGroup);
  let result = [];
  if (maxScore != 0) {
    studentsGroup.forEach((student) => {
      if (student.score === maxScore) {
        result.push(
          `Максимальное количество баллов: ${student.name} - ${maxScore}`
        );
      }
    });
  } else {
    result.push(`Количество баллов всех студентов группы = 0`);
  };
  return result;
}

// console.log(maxScoreFinding(allStudents[0]));
// maxScoreStudentFinding(allStudents[0]);

module.exports = maxScoreStudentFinding;
