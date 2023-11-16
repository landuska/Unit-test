allStudents = require("./students.json");
const maxScoreStudentFinding = require("./pokritie");

describe("Тестирование работы функции", () => {
  it("Максимальное значение баллов для первого эл-та из тестовых данных", () => {
    const result = [
      "Максимальное количество баллов: Ivan - 35",
      "Максимальное количество баллов: Stepan - 35",
    ];
    const expectValue = maxScoreStudentFinding(allStudents[0]);
    expect(expectValue).toEqual(result);
  });

  it("Максимальное значение баллов для второго эл-та из тестовых данных", () => {
    const result = [
      "Максимальное количество баллов: Natalia - 25",
      "Максимальное количество баллов: Marina - 25",
      "Максимальное количество баллов: Dmitry - 25",
    ];
    const expectValue = maxScoreStudentFinding(allStudents[1]);
    expect(expectValue).toEqual(result);
  });

  it("Максимальное значение баллов для третьего эл-та из тестовых данных", () => {
    const result = ["Количество баллов всех студентов группы = 0"];
    const expectValue = maxScoreStudentFinding(allStudents[2]);
    expect(expectValue).toEqual(result);
  });
});
