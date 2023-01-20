let nomeAtaque = prompt("Informe o nome do personagem 01: ")
let poderAtaque = prompt("Informe o poder de ataque do personagem 01: ")

let nomeDefesa = prompt("Informe o nome do personagem 02: ")
let poderDefesa = prompt("Informe o poder de defesa do personagem 02: ")
let vidaDefesa = prompt("Informe quantos pontos de vida possui o personagem 02: ")
let escudoDefesa = prompt("O personagem 02 possui escudo? ")

let danoCausado = 0

if(poderAtaque > poderDefesa && escudoDefesa === "n"){
    danoCausado = poderAtaque - poderDefesa
} else if(poderAtaque > poderDefesa && escudoDefesa === "s"){
    danoCausado = (poderAtaque - poderDefesa) / 2
} 

vidaDefesa -= danoCausado

console.log(
    "Dano causado: " + danoCausado +
    "\n" +
    "\n- Personagem 01 -" +
    "\nNome: " + nomeAtaque +
    "\nPoder de ataque: " + poderAtaque +
    "\n" +
    "\n- Personagem 02 -" +
    "\nNome: " + nomeDefesa +
    "\nPoder de defesa: " + poderDefesa +
    "\nPontos de vida: " + vidaDefesa +
    "\nEscudo: " + escudoDefesa
    )