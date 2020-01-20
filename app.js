let display = document.querySelector("#input");
let keyboard = document.querySelectorAll("button");
let skaicius = "";
let galutinis = "";
let solution = "";

function calculator () {
    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].addEventListener("click", function() {
            if (this.className === "number") skaicius += this.id;
            if (this.className === "operator") {
                galutinis += skaicius + this.id;
                skaicius = "";
            }
            if (this.id === "equal") return operate(galutinis);
        });
    }
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(galutinis) {
    galutinis.

  /*if (operand === "+") return sum(a, b);
  if (operand === "-") return sub(a, b);
  if (operand === "*") return mult(a, b);
  if (operand === "/") return divide(a, b);*/
}

calculator();
/*
Pasirenkam skaicius
Jei pasirenkam operatoriu sukisam skaiciu i galutini input
Jei lygu isvedam galutini
*/