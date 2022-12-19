const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passing = grades.filter(num => {
  return num >= 50;
});

console.log("passing grades ", passing);