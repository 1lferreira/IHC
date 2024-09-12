let num1 = 5;
let num2 = 3;

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    if (a == 0 || b == 0) {
        console.log("Erro: divisão por zero!");
        return -1;
    }
    return a / b;
}

function mult(a, b) {
    return a * b;
}

function evenOdd(a) {
    if (a % 2 == 0) {
        return "É um número par!";
    } else {
        return "É um númro ímpar!";
    }
}

function rangeSum(a, b) {
    sum = 0;

}

// SOMA
console.log(sum(num1, num2));

// SUBTRAÇÃO 
console.log(sub(num1, num2));

// DIVISÃO 
console.log(div(num1, num2));

// MULTIPLICAÇÃO 
console.log(mult(num1, num2));


