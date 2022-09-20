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

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  const creditBody = parseFloat(amount) - parseFloat(contribution);
  const percentInMonth = parseFloat(percent) / 100.0 / 12.0;
  const dateFrom = new Date();
  const dateTo = new Date(date);
  const countMonth = dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
  const anountInMonth = creditBody * (percentInMonth + (percentInMonth / (Math.pow(1 + percentInMonth, countMonth) - 1) ))

  totalAmount = anountInMonth * countMonth;

  return +totalAmount.toFixed(2);
}
