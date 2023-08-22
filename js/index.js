const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

buttonText.addEventListener('click', function () {
  const valorInput = inputText.value;
  localStorage.setItem('dato', valorInput);
});