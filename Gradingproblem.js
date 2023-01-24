function gradingStudents(grades) {
  // Write your code here
  // console.log(grades)
  let newGrades = grades.map((grade) => {
    if (grade > 35) {
      if (grade % 5 !== 0) {
        let multipleOf = grade;
        while (multipleOf % 5 !== 0) {
          multipleOf = multipleOf + 1;
        }
        if (multipleOf - grade < 3) {
          // console.log(multipleOf , grade  , "yoo")
          return multipleOf;
        } else {
          return grade;
        }
      } else {
        return grade;
      }
    } else {
      return grade;
    }
  });
  return newGrades;
}

let arr = [
  36, 6, 98, 25, 97, 24, 25, 70, 50, 71, 30, 14, 28, 100, 3, 26, 61, 98, 50, 41,
  5, 3, 28, 34, 0,
];
console.log(gradingStudents(arr));

// 36
// 6
// 100
// 25
// 97
// 24
// 25
// 70
// 50
// 71
// 30
// 14
// 28
// 100
// 3
// 26
// 61
// 100
// 50
// 41
// 5
// 3
// 28
// 34
// 0
