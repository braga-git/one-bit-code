let car01 = prompt("Informe o nome do 1º carro: ")
let carSpeed01 = prompt("Agora informe sua velocidade: ")
let car02 = prompt("Informe o nome do 2º carro: ")
let carSpeed02 = prompt("Agora informe sua velocidade: ")

if(carSpeed01 > carSpeed02){
    alert("O carro " + car01 + " é mais rápido!")
} else if(carSpeed01 > 0 && carSpeed02 > 0){
    alert("Os carros estão na mesma velocidade!")
} else if (carSpeed01 < carSpeed02) {
    alert("O carro " + car02 + " é mais rápido!")
} else if (carSpeed01 === carSpeed02){
    alert("Os carros estão parados!")
}