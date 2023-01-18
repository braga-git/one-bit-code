function areaTriangulo(base, altura){
    base = parseFloat(prompt("Informe a base do triângulo:"))
    altura = parseFloat(prompt("Informe a altura do triângulo:"))
    return base * altura / 2
}

function areaRetangulo(base, altura){
    base = parseFloat(prompt("Informe a base do retângulo:"))
    altura = parseFloat(prompt("Informe a altura do retângulo:"))
    return base * altura
}

function areaQuadrado(lado){
    lado = parseFloat(prompt("Informe o lado do quadrado:"))
    return lado * lado
}

function areaTrapezio(baseMaior, baseMenor, altura){
    baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    altura = parseFloat(prompt("Informe a altura do trapézio:"))
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(raio){
    raio = parseFloat(prompt("Informe a raio do círculo:"))
    return 3.14 * (raio * raio)
}

function menu(){
    return prompt(
        "Calculos disponíveis:" +
        "\n" +
        "A) Área do triângulo" + "\n" +
        "B) Área do retângulo" + "\n" +
        "C) Área do quadrado" + "\n" +
        "D) Área do trapézio" + "\n" +
        "E) Área do círculo" + "\n" +
        "\n" +
        "F) Sair"
    )

}


function exec (){
    let options = ""
    
    do{
        options = menu()
        
        let resultado

        switch(options){
            case "A":
                resultado = areaTriangulo()
                break   
            case "B":
                resultado = areaRetangulo()
                break
            case "C":
                resultado = areaQuadrado()
                break
            case "D":
                resultado = areaTrapezio()
                break
            case "E":
                resultado = areaCirculo()
                break
            case "F":
                alert("Saindo..")
                break       
            default:
                alert("Opção inválida!")
        }

        if(resultado){
            alert("O resultado é: " + resultado)
        }

    } while(options !== "F")
}

exec()