let quantiaInicial = prompt("Quanto dinheiro há disponível?")

let quantiaTotal = parseFloat(quantiaInicial)


let options = prompt(
    "Dinheiro disponível para saque:\nR$" +
    quantiaTotal +
    "\n" +
    "\nA - Sacar     B - Depositar     C - Sair"
)

do{
    switch(options){
        case "A":
            quantiaSaque = prompt("Informe o valor a ser retirado: ")
            saqueTotal = parseFloat(quantiaSaque)

            quantiaTotal -= saqueTotal
            options = prompt(
                "Dinheiro disponível para saque:\nR$" +
                quantiaTotal +
                "\n" +
                "\nA - Sacar     B - Depositar     C - Sair"
            )
        case "B":
            quantiaDeposito = prompt("Informe o valor a ser depositado: ")
            depositoTotal = parseFloat(quantiaDeposito)

            quantiaTotal += depositoTotal
            options = prompt(
                "Dinheiro disponível para saque:\nR$" +
                quantiaTotal +
                "\n" +
                "\nA - Sacar     B - Depositar     C - Sair"
            )
    }
} while (options !== "C")
