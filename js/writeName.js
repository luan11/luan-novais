var place1 = document.getElementById('write');
var text1 = 'Luan Novais dos Santos';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 150);
}

escrever(text1, place1);