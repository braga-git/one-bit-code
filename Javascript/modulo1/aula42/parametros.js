function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))    
}

// dobro()

function dizerOla(nome = "mundo"){
    alert ("Olá, " + nome + "!")
}

//dizerOla()

function soma (a, b){
    alert("O resultado da soma é " + (a + b))
}

// soma (7,4)
// soma (5,10)

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
    //...
}

function objetoComoParametro(usuario){
    usuario.nome
    usuario.telefone
    usuario.email
    usuario.senha
    usuario.endereco
    usuario.aniversario
}

const dadosUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: "",
}

objetoComoParametro(dadosUsuario)