// let num1 = parseFloat(prompt("Enter the first number:"));
// let operator = prompt("Enter the operator (+, -, *, /):");
// let num2 = parseFloat(prompt("Enter the second number:"));

// let result = 
//   operator === '+' ? num1 + num2 :
//   operator === '-' ? num1 - num2 :
//   operator === '*' ? num1 * num2 :
//   operator === '/' ? (num2 === 0 ? "Error: Division by zero" : num1 / num2) :
//   "Invalid operator";

// alert("Result: " + result);


var num1 = Number(prompt ("Enter Your First Number:"));
var operator = prompt("Choose Your Operation (+, -, *, /):");
var num2 = Number(prompt ("Enter Your Second Number:"));
var result;

if (operator == "+") {
  result = num1 + num2;
  alert ("Result: " + result);
}

else if (operator == "-") {
  result = num1 - num2;
  alert ("Result: " + result);
}

else if (operator == "*") {
  result = num1 * num2;
  alert ("Result: " + result);
}

else if (operator == "/") {
  result = num1 / num2;
  alert ("Result: " + result);
}

else {
  alert ("Invalid Operator!");
}