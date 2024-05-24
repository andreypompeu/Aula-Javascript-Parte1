// Exercícios //

// 1 //
// Escreva um programa que exiba "Olá, mundo!" no console //

const mensagem = "Olá mundo";
console.log(mensagem)

// 2 //
// Escreva um programa que calcule a média de três números e exiba o resultado no console.//
// Para calcular a média você só precisa somar os 3 números e dividir por 3 

const num1 = 10;
const num2 = 20;
const num3 = 30;

const media = (num1+num2+num3)/3;

console.log("A média dos números é",media)

// 3 //
// Escreva um programa que verifique se um número é maior que 10 e exiba o resultado no console//

const numero = 20;

if (numero > 10){
    console.log("Verificado",numero)
}
else{
     console.log("Não verificado",numero)
}

// 4 //
// Escreva um programa que verifique se um número é positivo e exiba o resultado no console //

const numero = -5;

if (numero > 0) {
    console.log("Número é positivo",numero)
}

else {
    console.log ("Número é negativo",numero)
}

// 5 //
// Escreva um programa que calcule a soma de dois números e exiba o resultado utilizando uma template string. Por exemplo, se os números forem 5 e 3, o programa deve exibir "A soma de 5 e 3 é igual a 8" //

const num1 = 10;
const num2 = 20;

const soma = (num1+num2)

console.log("A soma dos números é", soma)

