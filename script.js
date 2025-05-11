const output = document.querySelector('.output');
const inputField = document.getElementById('inputValueBar');
const getValueBtn = document.getElementById('getValueBtn');
const resetBtn = document.getElementById('resetBtn');
createGrid(16)

getValueBtn.addEventListener('click', () => {
   let size = parseInt(inputField.value);
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  clearGrid();
  createGrid(size);
});

resetBtn.addEventListener('click', () => {
  clearGrid();
});

function clearGrid() {
  output.innerHTML = '';
  inputField.innerHTML = '';
  createGrid(16)
}

function createGrid(size) {
  const total = size * size;
  output.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
  for (let i = 0; i < total; i++) {
    const ele = document.createElement('div');
    ele.classList.add('box');
    ele.style.fontSize = '3vh';
    ele.onmouseenter = function () {
      ele.style.backgroundColor = 'grey';
    };
    output.append(ele);
  }
}
