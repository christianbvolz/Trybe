const addNewKeyValue = (object, key, value) => {
  object[key] = value;
  return object;
};

const machado = {
  atk: 30,
  speed: 0.75,
}

console.log(addNewKeyValue(machado, 'range', 1));

console.log(Object.keys(machado)[0]);