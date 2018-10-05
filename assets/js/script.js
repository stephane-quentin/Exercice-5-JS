function ex5(){
  var first = Math.trunc(document.getElementById("firstNumber").value); //ne garde que la paartie entière du chiffre récupéré dans la variable firstNumber
  var second = document.getElementById("secondNumber").value;
  alert(first*second);
}
