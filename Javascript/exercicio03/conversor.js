let valorMetro = prompt("Informe o valor em metros: ")
let ConverterPara = prompt("Informe para qual unidade de medida deseja converter:\nA - Milímetro (mm)\nB - Centímetro (cm)\nC - Decímetro (dm)\nD - Decâmetro (dam)\nE - Hectômetro (hm)\nF - Quilômetro (km)")

switch (ConverterPara){
    case "A":
        resultado = valorMetro * 1000
        alert(valorMetro + " metros é igual a " + resultado + " milímetros.")
        break
    case "B":
        resultado = valorMetro * 100
        alert(valorMetro + " metros é igual a " + resultado + " centímetros.")
        break
    case "C":
        resultado = valorMetro * 10
        alert(valorMetro + " metros é igual a " + resultado + " decímetros.")
        break
    case "D":
        resultado = valorMetro / 10
        alert(valorMetro + " metros é igual a " + resultado + " decâmetros.")
        break
    case "E":
        resultado = valorMetro / 100
        alert(valorMetro + " metros é igual a " + resultado + " hectômetros.")
        break
    case "F":
        resultado = valorMetro / 1000
        alert(valorMetro + " metros é igual a " + resultado + " quilômetros.")
        break
    default:
        alert("Opção inválida!")
}