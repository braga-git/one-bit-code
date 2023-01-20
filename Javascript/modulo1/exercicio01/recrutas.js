let primeiroNome = prompt("Informe seu nome:")
let sobrenome = prompt("Informe seu sobrenome:")
let campoDeEstudo = prompt("Informe seu campo de estudo:")
let anoDeNascimento = prompt("Informe seu ano de nascimento")

alert(
"Recruta cadastrado com sucesso!" +
"\nNome completo: " + primeiroNome + " " + sobrenome + 
"\nCampo de estudo: " + campoDeEstudo + 
"\nIdade: " + (2022 - anoDeNascimento) + " anos"
)