const baralho = []
let options = ""

do{
    options = prompt(
        baralho.length +
        "\n" +
        "\nA) Adicionar uma carta    B) Puxar uma carta    C) Sair"
    )

    switch(options){
        case "A":
            baralho.unshift(prompt("Informe o nome da carta:"))
            break
        case "B":
            cartaTopo = baralho.shift()
            if (cartaTopo) {
                alert("Esta era a carta no topo do baralho: " + cartaTopo)
            } else {
                alert("Não há mais cartas no baralho!")
            }
            break
        case "C":
            alert("Saindo..")
            break
        default:
            alert("Opção Inválida!")
    }

} while(options !== "C")