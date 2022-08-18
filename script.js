function ValorEmReal(){
    var Elemento = parseFloat(document.getElementById("valorInserido").value)
    var Taxa = parseFloat(document.getElementById("valorTaxa").value)
  SEK = Elemento*Taxa
var SekDecimal = SEK.toFixed(2)

document.getElementById("valorEmR$").innerHTML= "R$" + SekDecimal
  }