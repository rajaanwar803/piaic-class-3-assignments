"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
let firstNum = prompt("Enter first number: ");
let operation = prompt("Enter your operation (+ - * /): ");
let secondNum = prompt("Enter second number: ");
firstNum = parseFloat(firstNum);
secondNum = parseFloat(secondNum);
if (operation == "+") {
    let result = add(firstNum, secondNum);
    console.log(`${firstNum} + ${secondNum} = ${result}`);
}
else if (operation == "-") {
    let result = subtract(firstNum, secondNum);
    console.log(`${firstNum} - ${secondNum} = ${result}`);
}
else if (operation == "*") {
    let result = multiply(firstNum, secondNum);
    console.log(`${firstNum} * ${secondNum} = ${result}`);
}
else if (operation == "/") {
    let result = divide(firstNum, secondNum);
    console.log(`${firstNum} / ${secondNum} = ${result}`);
}
