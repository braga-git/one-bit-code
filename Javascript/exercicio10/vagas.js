function menu(){
    return prompt(
        "SISTEMA DE VAGAS DE EMPREGO" + "\n" + "\n" +
        "A - Listar vagas disponíveis" + "\n" +
        "B - Criar uma nova vaga" + "\n" +
        "C - Visualizar uma vaga" + "\n" +
        "D - Inscrever um candidato em uma vaga" + "\n" +
        "E - Excluir uma vaga" + "\n" + "\n" +
        "F - Sair"
    )
}


function listarVagas(){
    for(i = 0; i < vagas.length; i++){
        alert(
            "Indice: " + i + "\n" +
            "Nome: " + vagas[i].nome + "\n" +
            "Quantidade de candidatos: " + vagas[i].candidatos.length
        )
    }

    return
} 


function criarVaga(nome, descricao, dataLimite){
    const vaga = {
        nome,
        descricao,
        dataLimite,
        candidatos:[]
    }
        vaga.nome = prompt("Informe o nome da vaga:")
        vaga.descricao = prompt("Descreva a vaga:")
        vaga.dataLimite = prompt("Informe a data limite da vaga:")

    const confirmaVaga = confirm(
        "Deseja salvar esta vaga?" + "\n" + "\n" +
        "Nome: " + vaga.nome  + "\n" +
        "Descrição: " + vaga.descricao  + "\n" +
        "Data limite: " + vaga.dataLimite
    )

    if(confirmaVaga){
        vagas.push(vaga)
    }

    return vaga
}  


function visualizarVaga(i){
    i = prompt("Informe o indice da vaga que deseja visualizar:")

    if(vagas[i]){
        alert(
            "Indice: " + (i) + "\n" +
            "Nome: " + vagas[i].nome + "\n" +
            "Descrição: " + vagas[i].descricao + "\n" +
            "Data limite: " + vagas[i].dataLimite + "\n" +
            "Quantidade de candidatos: " + vagas[i].candidatos.length + "\n" +
            "Nomes dos candidatos: " + vagas[i].candidatos
        )
    } else {
        alert("Esse índice não corresponde a nenhuma vaga")
    }

    return
} 


function inscreverCandidato(i, candidato){
    i = prompt("Informe o indice da vaga que deseja inscrever o candidato:")
    
    if(vagas[i]){
        candidato = prompt("Informe o nome do candidato:")

        const confirmaInscrever = confirm (
            "Deseja inscrever o candidato " + candidato + " nesta vaga?" + "\n" +
            "\n" +
            "Indice: " + (i) + "\n" +
            "Nome: " + vagas[i].nome + "\n" +
            "Descrição: " + vagas[i].descricao + "\n" +
            "Data limite: " + vagas[i].dataLimite + "\n" +
            "Quantidade de candidatos: " + vagas[i].candidatos.length + "\n" +
            "Nomes dos candidatos: " + vagas[i].candidatos
        )
    
        if(confirmaInscrever){
            vagas[i].candidatos.push(candidato)
        }

    } else {
        alert("Esse índice não corresponde a nenhuma vaga")
    }

    return
}


function excluirVaga(i){
    i = prompt("Informe o indice da vaga que deseja excluir:")

    if(vagas[i]){
        const confirmaExcluir = confirm (
            "Deseja excluir esta vaga?" + "\n" +
            "\n" +
            "Indice: " + (i) + "\n" +
            "Nome: " + vagas[i].nome + "\n" +
            "Descrição: " + vagas[i].descricao + "\n" +
            "Data limite: " + vagas[i].dataLimite + "\n" +
            "Quantidade de candidatos: " + vagas[i].candidatos.length + "\n" +
            "Nomes dos candidatos: " + vagas[i].candidatos
        )
    
        if(confirmaExcluir){
            vagasExcluidas = vagas.splice(i, 1)
        }
    } else {
        alert("Esse índice não corresponde a nenhuma vaga!")
    }

    
    return
}

let vagas = []

let vagasExcluidas = []

function exec(){

    let options = ""

    do {
        options = menu()

        switch(options){
            case "A":
                listarVagas()
                break

            case "B":
                criarVaga()
                break

            case "C":
                visualizarVaga()
                break

            case "D":
                inscreverCandidato()
                break
                
            case "E":
                excluirVaga()
                break

            case "F":
                alert("Saindo..")
                break

            default:
                alert("Opção inválida")
        }

    } while(options !== "F")

}

exec()

