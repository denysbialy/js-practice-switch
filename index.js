// Задача 1
//С помощью условной конструкции if ... else реализовать функцию которая будет принимать строку в
//которой описан текущий цвет светофора и которая будет говорить пользователю, какое действие ему
//сейчас можно делать в виде строки. (красный => стоять  и тд)

const trafficLights = function (color) {
  if (color === "red") {
    return "Stop";
  } else if (color === "yellow") {
    return "Attention";
  } else if (color === "green") {
    return "Go";
  } else {
    return "enter the color of the traffic lights";
  }
};

// Задача 2
// Реализовать калькулятор с помощью конструкции switch. Калькулятор будет принимать 2
// числа и оператор и возвращать реузльтат математических операций сложения, вычитания,
// деления и умножения.

let numberOne = +prompt("1");
let numberTwo = +prompt("2");
let operand = prompt("oper");
let result = 0;
switch (operand) {
  case "+": {
    result = numberOne + numberTwo;
    break;
  }
  case "-": {
    result = numberOne - numberTwo;
    break;
  }
  case "*": {
    result = numberOne * numberTwo;
    break;
  }
  case "/": {
    result = numberOne / numberTwo;
    break;
  }
  default: {
    alert("Error, enter the correct data for the calculator");
  }
}
console.log(result);

// Задача 3
// Реализовать функцию которая будет принимать месяц в виде числа и будет
// возвращать к какому сезону он относится. Условную конструкцию используте на свое усмотрение

const funcGetMonth = function (numberMonth) {
  switch (numberMonth) {
    case 12:
    case 1:
    case 2:{
        console.log('Это Зима!')
        break
    }
    case 3:
    case 4:
    case 5:{
        console.log('Это Весна!')
        break
    }
    case 6:
    case 7:
    case 8:{
        console.log('Это Лето!')
        break
    }
    case 9:
    case 10:
    case 11:{
        console.log('Это Осень!')
        break
    }
    default:{
        console.log('Эй товарищь, пиши существующий месяц.')
    }
  }
};
funcGetMonth(11)