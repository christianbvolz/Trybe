function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exericio 1

function december() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysList = document.getElementById('days');

  for (let day of dezDaysList) {
    let listItem = document.createElement('li');
    listItem.innerHTML = day;

    if (day === 24 || day === 31) {
      listItem.className = 'day holiday';
    } else if (day === 4 || day === 11 || day === 18){
      listItem.className = 'day friday';
    } else if (day == 25) {
      listItem.className = 'day holiday friday';
    } else {
      listItem.className = 'day';
    }
    daysList.appendChild(listItem);
  }
}

december();

// Exercicio 2

function holiday(string) {
  let button = document.createElement('button');
  button.id = 'btn-holyday';
  button.innerHTML = string;
  document.getElementsByClassName('buttons-container')[0].appendChild(button);
}

holiday('Feriados');

// Exercicio 3

function changeHolydaysColor() {
  let holydays = document.getElementsByClassName('holiday');
  for (let index in holydays) {
    if (holydays[index].style.backgroundColor === 'green') {
      holydays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holydays[index].style.backgroundColor = 'green';
    }
  }
}

document.getElementById('btn-holyday').addEventListener("click", changeHolydaysColor);

// Exercicio 4

function friday(string) {
  let button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerHTML = string;
  document.getElementsByClassName('buttons-container')[0].appendChild(button);
}

friday('Sexta-feira');

// Exercicio 5

function changefridaysColor() {
  let fridays = document.getElementsByClassName('friday');
  for (let index in fridays) {
    if (fridays[index].style.backgroundColor === 'red') {
      fridays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      fridays[index].style.backgroundColor = 'red';
    }
  }
}

document.getElementById('btn-friday').addEventListener("click", changefridaysColor);

// Exercicio 6

function zoomIn(evt) {
  const target = evt.target;
  target.style.fontSize = '40px';
}


function zoomOut(evt) {
  const target = evt.target;
  target.style.fontSize = '20px'; 
}

for (let item of document.getElementsByClassName('day')) {
  item.addEventListener('mouseover', zoomIn);
  item.addEventListener('mouseout', zoomOut);
}

// Exercicio 7

function task(string) {
  let task = document.createElement('span');
  task.innerHTML = string;
  document.querySelector('.my-tasks').appendChild(task); 
}

task('cozinhar');

// Exercicio 8

function colorTask(cor) {
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = cor;
  document.querySelector('.my-tasks').appendChild(div);
}

colorTask('green');

// Exercicio 9

function selectTask() {
  let task = document.querySelector('.task');

  task.addEventListener('click', function() {
    if (task.className === 'task selected') {
      task.className = 'task';
    } else {
      task.className = 'task selected';
    }
  })
}

selectTask();

// Exercicio 10

function taskDay() {
  for (let day of document.getElementsByClassName('day')) {
    day.addEventListener('click', function() {
      if (document.querySelector('.selected') === null) {
        alert('Selecione uma tarefa!!!');
      } else {
        let color = document.querySelector('.selected').style.backgroundColor;
        if (day.style.color === color){
          day.style.color = 'rgb(119,119,119)';
        } else {
          day.style.color = color;
        }
      }
    })
  }
}

taskDay();

// Bonus

function compromissos() {
  if (document.getElementById('task-input').value.length === 0) {
    alert('Insira um compromisso!!!');
  }else {
    let conteiner = document.querySelector('.input-container');
    let inputText = document.getElementById('task-input');
    let newTask = document.createElement('div');
    newTask.innerHTML = inputText.value;
    newTask.className = 'compromisso';
    conteiner.appendChild(newTask);
    inputText.value = '';
  }
}

document.getElementById('btn-add').addEventListener('click', compromissos);

document.getElementById('task-input').addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    compromissos();
  }
})