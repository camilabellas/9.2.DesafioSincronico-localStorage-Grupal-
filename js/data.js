
const elementoInfo = document.getElementById('data');
const dato = localStorage.getItem('dato');

if (dato !== null) {
  elementoInfo.textContent = dato;
}