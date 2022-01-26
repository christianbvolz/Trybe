const numbers = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject('Insira apenas numeros.');
    }
    
    const result = (num1 + num2) * num3;

    if (result < 50) reject('valor baixo');

    resolve(result);
  });
};

const randomNun = () => Math.floor(Math.random() * 10 + 1);

numbers(randomNun(), randomNun(), randomNun())
 .then(result => console.log(result))
 .catch(error => console.log(error));

const asyncFunc = async () => {
  try {
    const result = await numbers(randomNun(), randomNun(), randomNun());
    console.log(result);
    
  } catch (err) {
    console.error(err);
  }
}

asyncFunc();