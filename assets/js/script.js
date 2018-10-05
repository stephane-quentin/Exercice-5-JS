function ex5(){
  var first = Math.trunc(document.getElementById("firstNumber").value); //ne garde que la paartie entière du chiffre récupéré dans la variable firstNumber
  var second = document.getElementById("secondNumber").value;
  alert("Résultat : " + (first * second)); // fait la multiplication entre le contenu de la variable first et celui de la variable second
}
