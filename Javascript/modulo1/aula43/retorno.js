function calcularMedia(a, b){
    const media = (a + b) / 2

    return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)


function criarProduto(nome, preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

console.log(criarProduto("Notebook Intel Core i3 8GB", 2500))

function areaRetangular(base, altura){
    return base * altura
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

//console.log(areaRetangular(3, 7)) 
//console.log(areaQuadrada(8)) 

function ola(){
    let text = "..."
    return text
    text = "Olá, mundo!"
    console.log(text)
}

console.log(ola())

function maioridade(idade){
    if(idade >= 18){
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maioridade(29))
console.log(maioridade(17))