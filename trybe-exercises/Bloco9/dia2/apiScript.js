// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      const h2 = document.getElementById("jokeContainer");
      h2.innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();

const func1 = () => {
  const promise = new Promise((resolve, reject) => {
    let numbers = [];
    for (let index = 0; index < 10; index += 1) {
      const randomNumber = Math.floor(Math.random * 51) ** 2;
      numbers.push(randomNumber);
    }
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    (sum < 8000) ? resolve() : reject();
  });
  promise.then((sum) => [2, 3, 5, 10].map((number) => sum / number))
  .them((array) => array.reduce((acc, number) => acc + number, 0))
  .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
};

func1();
