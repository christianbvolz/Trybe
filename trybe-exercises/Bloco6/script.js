const estado = document.getElementById('estado');
const btnSubmit = document.getElementById('btn-submit');

const inputs = {
  'nome': {
    maxLength: 40,
    required: true,
  },
  'e-mail': {
    maxLength: 50,
    required: true,
  },
  'cpf': {
    maxLength: 11,
    required: true,
  },
  'endereço': {
    maxLength: 200,
    required: true,
  },
  "cidade": {
    maxLength: 28,
    required: true,
  },
  "estado": {
    required: true,
  },
  "tipo": {
    required: true,
  },
  "resumo": {
    maxLength: 1000,
    required: true,
  },
  "cargo": {
    maxLength: 40,
    required: true,
  },
  "descrição-cargo": {
    maxLength: 500,
    required: true,
  },
}


function estados () {
  const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  for (const item of estados) {
    const option = document.createElement('option');
    option.innerHTML = item;
    option.value = item;
    estado.appendChild(option);
  }
}

function curriculo(event) {
  event.preventDefault();
}

function date() {
 let date = document.getElementById('data-inicio').value;
  date = date.split('/');
  const dia = parseInt(date[0]);
  const mes = parseInt(date[1]);
  const ano = parseInt(date[2]);
  if (date.length !== 3 | dia > 31 | dia < 1 | mes > 12 | mes < 1 | ano < 1) {
    return false;
  }
}

function validacao() {
  if (date() === false){
    geraCurriculo('false1');
  }
  for (const item in inputs) {
    const input = document.getElementById(`${item}`); // `${item}`
    if (inputs[item].maxLength) {
      if (inputs[item].maxLength !== input.maxLength) {
         return geraCurriculo('false2');
      }
    }
    if (inputs[item].required !== input.required) {
      return geraCurriculo('false2');
    }
  }
  return geraCurriculo();
}

function geraCurriculo(validacao) {
  if (validacao === 'false1') {
    return alert('Insira uma data válida!');
  } else if (validacao === 'false2'){
    return alert('Insira os dados obrigatorios!');
  } else {
    const dados = document.getElementById("dados");

  }
}

window.onload = estados();

btnSubmit.addEventListener('click', curriculo);
btnSubmit.addEventListener('click', validacao);