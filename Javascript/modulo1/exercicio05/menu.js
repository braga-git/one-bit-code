let options = prompt(
    "Selecione uma das opções:" +
    "\nA - Home" +
    "\nB - Loja" +
    "\nC - Biblioteca" +
    "\nD - FAQ" +
    "\nE - Encerrar"
)

do {
    switch(options){
        case "A":
            alert("Opção escolhida: \nA - Home")
            options = prompt(
                "Selecione uma das opções:" +
                "\nA - Home" +
                "\nB - Loja" +
                "\nC - Biblioteca" +
                "\nD - FAQ" +
                "\nE - Encerrar"
            )
            break
        case "B":
            alert("Opção escolhida: \nB - Loja")
            options = prompt(
                "Selecione uma das opções:" +
                "\nA - Home" +
                "\nB - Loja" +
                "\nC - Biblioteca" +
                "\nD - FAQ" +
                "\nE - Encerrar"
            )
            break
        case "C":
            alert("Opção escolhida: \nC - Biblioteca")
            options = prompt(
                "Selecione uma das opções:" +
                "\nA - Home" +
                "\nB - Loja" +
                "\nC - Biblioteca" +
                "\nD - FAQ" +
                "\nE - Encerrar"
            )
            break
        case "D":
            alert("Opção escolhida: \nD - FAQ")
            options = prompt(
                "Selecione uma das opções:" +
                "\nA - Home" +
                "\nB - Loja" +
                "\nC - Biblioteca" +
                "\nD - FAQ" +
                "\nE - Encerrar"
            )
            break
        case "E":
            alert("Opção escolhida: \nE - Encerrar \n \nEncerrando programa..")
            break
    }
} while (options !== "E")
