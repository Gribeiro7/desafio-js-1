let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")

let sum = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let mult = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let resDiv = Number(numberOne) % Number(numberTwo)


alert("A soma dos dois números é : " + sum)
alert("A subtração dos dois números é : " + sub)
alert("A multiplicação dos dois números é : " + mult)
alert("A divisão dos dois números é : " + div)
alert("O resto da divisão dos dois números é : " + resDiv)

if (numberOne === numberTwo) {
    alert("Os números inseridos são iguais")
} else {
    alert("Os números inseridos são diferentes")
}