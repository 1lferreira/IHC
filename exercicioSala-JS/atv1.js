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
    let sum = 0;
    if (b > a) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    } else if (a === b) {
        return console.log("Não há intervalo entre os números");
    }
    return sum;
}

function factorial(a) {
    let factorial = 1;
    for (let i = 1; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

function vogalsSum(text) {
    let sum = 0;
    const vogals = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

    for (let i = 0; i < text.length; i++) {
        if (vogals.includes(text[i])) {
            sum++;
        }
    }

    return console.log("Quantidade de vogais: " + sum);
}


// SOMA
console.log(sum(num1, num2));

// SUBTRAÇÃO 
console.log(sub(num1, num2));

// DIVISÃO 
console.log(div(num1, num2));

// DIVISÃO / 0
console.log(div(num1, 0));

// MULTIPLICAÇÃO 
console.log(mult(num1, num2));

// NÚMERO PAR 
console.log(evenOdd(num1));

// SOMA DE INTERVALO
console.log(rangeSum(num1, num2));

// FATORIAL 
console.log(factorial(num1));

// CONTAGEM DE VOGAIS 
console.log(vogalsSum('JavaScript'))
