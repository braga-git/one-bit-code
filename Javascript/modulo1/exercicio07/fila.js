let filaPacientes = []

do{
    let pacientes = ""

    for(i = 0; i < filaPacientes.length; i++){
        pacientes += (i + 1) + "º " + filaPacientes[i] + "\n"
    }

    options = prompt(
        "Pacientes:\n" + pacientes +
        "\n" +
        "\nA) Novo Paciente       B) Consultar Paciente       C) Sair"
    )

    switch(options){
        case "A":
            filaPacientes.push(prompt("Informe o nome do paciente:"))
            break

        case "B":
            ultimoPaciente = filaPacientes.pop()
                if(ultimoPaciente){
                    alert("O paciente " + ultimoPaciente + " acaba de ser consultado.")
                } else {
                    alert("Não há pacientes na fila")
                }
            break
        case "C":
            alert("Encerrando..")
            break
        default:
            alert("Opção inválida!")
    }

} while(options !== "C")