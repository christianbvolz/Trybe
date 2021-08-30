const estado = document.getElementById('estado');
const btnSubmit = document.getElementById('btn-submit');


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

window.onload = estados();

document.getElementById('data-inicio').DatePickerX.init();
btnSubmit.addEventListener('click', curriculo);
