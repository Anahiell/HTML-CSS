function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    } else {
        return base * power(base, exponent - 1);
    }
}
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
function maxDigit(number) {
    if (number < 10) {
        return number;
    } else {
        let lastDigit = number % 10;
        let remainingDigits = Math.floor(number / 10);
        let maxInRest = maxDigit(remainingDigits);
        return Math.max(lastDigit, maxInRest);
    }
}
function isPrime(number, divisor = 2) {
    if (number <= 2) {
        return (number === 2);
    }
    if (number % divisor === 0) {
        return false;
    }
    if (divisor * divisor > number) {
        return true;
    }
    return isPrime(number, divisor + 1);
}
function factors(number, divisor = 2) {
    if (number < 2) {
        return [];
    }
    if (number % divisor === 0) {
        return [divisor, ...factors(number / divisor, divisor)];
    }
    return factors(number, divisor + 1);
}
function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function calculatePower() {
    const base = document.getElementById("base").value;
    const exponent = document.getElementById("exponent").value;
    const result = power(parseInt(base), parseInt(exponent));
    document.getElementById("powerResult").innerText = result;
}

function calculateGCD() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const result = gcd(parseInt(number1), parseInt(number2));
    document.getElementById("gcdResult").innerText = result;
}

function findMaxDigit() {
    const number = document.getElementById("number").value;
    const result = maxDigit(parseInt(number));
    document.getElementById("maxDigitResult").innerText = result;
}

function checkPrime() {
    const number = document.getElementById("primeNumber").value;
    const result = isPrime(parseInt(number));
    document.getElementById("primeResult").innerText = result;
}

function findFactors() {
    const number = document.getElementById("factorNumber").value;
    const result = factors(parseInt(number));
    document.getElementById("factorResult").innerText = result.join(", ");
}

function calculateFibonacci() {
    const number = document.getElementById("fibonacciNumber").value;
    const result = fibonacci(parseInt(number));
    document.getElementById("fibonacciResult").innerText = result;
}
