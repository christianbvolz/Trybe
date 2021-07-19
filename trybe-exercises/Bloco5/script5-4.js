const bgColor = document.getElementById('input-bg');
const txtColor = document.getElementById('input-txtcolor');
const fontSize = document.getElementById('input-fontsize');
const lineHeight = document.getElementById('input-lineheight');
const fontFamily = document.getElementById('input-fontfamily');
const body = document.getElementById('body');
const main = document.getElementById('main');
const btnSave = document.getElementById('btn-save');

function preferences() {
  if (localStorage.length !== 0) {
    body.style.backgroundColor = localStorage.getItem('bgColor');
    bgColor.value = localStorage.getItem('bgColor');
    body.style.color = localStorage.getItem('txtColor');
    txtColor.value = localStorage.getItem('txtColor');
    main.style.fontSize = localStorage.getItem('fontSize');
    fontSize.value = localStorage.getItem('fontSize');
    main.style.fontFamily = localStorage.getItem('fontFamily');
    fontFamily.value = localStorage.getItem('fontFamily');
    main.style.lineHeight = localStorage.getItem('lineHeight');
    lineHeight.value = localStorage.getItem('lineHeight');
  }
}

window.onload = preferences;

function savePreferences() {
  localStorage.setItem('bgColor', bgColor.value);
  localStorage.setItem('txtColor', txtColor.value);
  localStorage.setItem('fontSize', fontSize.value);
  localStorage.setItem('lineHeight', lineHeight.value);
  localStorage.setItem('fontFamily', fontFamily.value);
}

function updateColor(event) {
  // console.log(event.target.value);
}

bgColor.addEventListener('input', updateColor);
txtColor.addEventListener('input', updateColor);
btnSave.addEventListener('click', savePreferences);
btnSave.addEventListener('click', preferences);