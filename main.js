function myColor() {
  const red = document.getElementById('red').value;
  const green = document.getElementById('green').value;
  const blue = document.getElementById('blue').value;
  const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  document.body.style.background = color;
  document.getElementById('box').value = color;
}
document.getElementById('red').addEventListener('input', myColor);
document.getElementById('green').addEventListener('input', myColor);
document.getElementById('blue').addEventListener('input', myColor);