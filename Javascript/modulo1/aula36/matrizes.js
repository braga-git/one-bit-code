const arr = [
        "1º nível",
        ["2º nível", 42, true],
        [
            ["3º nível, 1º item", "Olá, mundo!"],
            ["3º nível, 2º item", "Tchau, mundo!"]
        ],
        []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][1])
console.log(arr[2][1][0])

const matriz = [
    ["l1, c1","l1, c2","l1, c3","l1, c4"],
    ["l2, c1","l2, c2","l2, c3","l2, c4"],
    ["l3, c1","l3, c2","l3, c3","l3, c4"]
]

// console.table(matriz)

// matriz.push(["Nova linha"])
// matriz[0].push(["Nova coluna"])

// console.table(matriz)

for(let i = 0; i < matriz.lenght; i++){
    for(let j = 0; j < matriz[i].lenght; j++){
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
}