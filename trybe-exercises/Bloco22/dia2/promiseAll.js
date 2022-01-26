const fs = require('fs');
const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

const promiseAll = async () => {
  const promisesArray = array.map((word, index) =>
    fs.promises.writeFile(`./file${index + 1}.txt`, word)
  );
  await Promise.all(promisesArray);
  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const readFiles = await Promise.all(
    files.map((fileName) => fs.promises.readFile(fileName, 'utf-8'))
  );

  const phrase = readFiles.join(' ');

  await fs.promises.writeFile('./phrase.txt', phrase);
};

promiseAll();

module.exports = promiseAll;
