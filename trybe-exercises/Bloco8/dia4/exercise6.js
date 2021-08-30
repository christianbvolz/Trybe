const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9]
];

function studentAverage() {
  return students.map((student, index1) => ({
      name: student,
      average: grades[index1].reduce((acc, nota, index2, array) => {
        if (index2 === array.length - 1) {
          return (acc + nota) / array.length;
        }
        return acc += nota;
      })
    })
  )
};

  const expected = [{
      name: 'Pedro Henrique',
      average: 7.8
    },
    {
      name: 'Miguel',
      average: 9.2
    },
    {
      name: 'Maria Clara',
      average: 8.8
    },
  ];

  assert.deepStrictEqual(studentAverage(), expected);