let x = prompt("Informe o número de X:")
let y = prompt("Informe o número de Y:")

let num1 = parseFloat(x)
let num2 = parseFloat(y)

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

alert(
    "A soma de X e Y é igual a: " + soma +
    "\nA subtração de X e Y é igual a: " + subtracao +
    "\nA multiplicação de X e Y é igual a: " + multiplicacao +
    "\nA divisão de X e Y é igual a: " + divisao
)