"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  const tmp = 2*a;
  if (discriminant === 0) {
    arr.push(-b/tmp);
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/tmp);
    arr.push((-b - Math.sqrt(discriminant) )/tmp);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
