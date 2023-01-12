let num = prompt("Informe o número a ser multiplicado:")

let tabuada = ""

for(let i = 1; i < 21; i++){
    tabuada += num + " * " + i + " = " + num * i + "\n"
}

alert(tabuada)