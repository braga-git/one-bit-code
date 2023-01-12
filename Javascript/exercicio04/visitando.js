let nomeTurista = prompt("Informe seu nome: ")
let cidades = ""
let contagem = 0

let visitou = prompt("Você visitou alguma cidade?")

while (visitou === "sim"){
    let cidade = prompt("Qual o nome da cidade visitada? ")

    cidades += " - " + cidade + "\n"
    contagem++
    visitou = prompt("Você visitou outra cidade?")
}

alert("Você visitou estas cidades:\n" + cidades + "\nUm total de " + contagem + " cidades visitadas.")