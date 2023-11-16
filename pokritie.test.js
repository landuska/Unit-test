allStudents = require("./students.json");
const maxScoreStudentFinding = require("./pokritie");


describe("Тестирование работы функции", () => {
  it("Максимальное значение баллов", () => {
    const result = [
        'Максимальное количество баллов: Ivan - 35',
        'Максимальное количество баллов: Stepan - 35'
      ];
    const expectValue = maxScoreStudentFinding(allStudents[0]);
    expect(expectValue).toEqual(result);
  });

  it("Максимальное значение баллов", () => {
    const result = [
        'Максимальное количество баллов: Natalia - 25',
        'Максимальное количество баллов: Marina - 25',
        'Максимальное количество баллов: Dmitry - 25'
      ];
    const expectValue = maxScoreStudentFinding(allStudents[1]);
    expect(expectValue).toEqual(result);
  });

  it("Максимальное значение баллов", () => {
    const result = [ 'Количество баллов всех студентов группы = 0' ];
    const expectValue = maxScoreStudentFinding(allStudents[2]);
    expect(expectValue).toEqual(result);
  });
});
