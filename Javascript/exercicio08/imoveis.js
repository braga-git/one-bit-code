const listaImoveis = []
let options = ""

do{
    options = prompt(
        "Imóveis cadastrados: " + listaImoveis.length + "\n" + 
        "\n" +
        "A) Cadastrar um imóvel" + "\n" +
        "B) Visualizar imóveis" + "\n" +
        "C) Sair"
    )

    switch(options){
        case "A":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário:")
            imovel.numQuartos = parseFloat(prompt("Informe o número de quartos:"))
            imovel.numBanheiros = parseFloat(prompt("Informe o número de banheiros:"))
            imovel.garagem = prompt("Possui garagem? (Sim/Não)")

            const confirma = confirm(
                "Deseja salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario + 
                "\nNúmero de quartos: " + imovel.numQuartos + 
                "\nNúmero de banheiros: " + imovel.numBanheiros + 
                "\nPossui garagem? " + imovel.garagem 
            )

            if(confirma){
                listaImoveis.push(imovel)
            }
            break

        case "B":
            for(i = 0; i < listaImoveis.length; i++){
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + listaImoveis[i].proprietario +
                    "\nNúmero de quartos: " + listaImoveis[i].numQuartos + 
                    "\nNúmero de banheiros: " + listaImoveis[i].numBanheiros + 
                    "\nPossui garagem? " + listaImoveis[i].garagem 
                )
            }
            break

        case "C":
            alert("Saindo..")
            break

        default:
            alert("Opção inválida!")
    }

} while (options !== "C")