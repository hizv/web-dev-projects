let result = 0, op = '';

const display = document.querySelector('.result-screen');

function applyOp(op, a, b) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '✕': return a * b;
    case '÷': return (a / b).toFixed(4);
  }
}

document.querySelector('.calculator').addEventListener('click', function(event) {
  const button = event.target.innerText;
  const classList = event.target.classList;

  if (classList.contains('result-screen')) return;

  switch (button) {
    case '=':
      if (op !== '') result = applyOp(op, result, Number(display.innerText));
      display.innerText = result;
      op = '';
      return;

    case 'C':
      result = 0;
      op = '';
      display.innerText = result;
      return;
  }

  if (classList.contains('del-button')) {
    if (button === '0') return;
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') display.innerText = '0';
  }
  else if (classList.contains('orange-button')) {
    op = button;
    result = Number(display.innerText);
    display.innerText = '0';
  }
  else if (display.innerText === '0') {
    display.innerText = button;
  }
  else {
    display.innerText += button;
  }
});
