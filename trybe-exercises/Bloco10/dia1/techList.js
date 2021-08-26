const techList = (array, nome) => {
  if (array.length === 0) {
    return 'Vazio!';
  }
  return array.sort().reduce((acc, tech) => {
    const obj = { tech: tech, name: nome };
    acc.push(obj);
    return acc;
  }, []);
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = techList;