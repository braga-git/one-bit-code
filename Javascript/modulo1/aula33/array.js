const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//adicionar elementos
//push - fim
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//unshift - começo
tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)


//remover elementos
//pop - fim
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift - começo
const primeiroElemento = arr.shift("Teste")
console.log(arr)
console.log(primeiroElemento)


//pesquisar elementos
//includes - se existe no array
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf - pelo indice do elemento
const indice = arr.indexOf("Gandalf")
console.log(indice)


//cortar e concatenar arrays
//slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)


//substituir elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)


//iterar elementos
for(let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}