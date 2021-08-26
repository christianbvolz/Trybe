const hydrate = (string) => {
  let array = string.replace(/\D/g, '');
  let result = 0;
  for (let number of array) {
    result += parseInt(number, 10);
  }
  if (result > 1) {
    return (`${result} copos de água`);
  }
  return (`${result} copo de água`);
};

module.exports = hydrate;