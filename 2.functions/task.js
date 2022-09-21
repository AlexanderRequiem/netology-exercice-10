// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  if (!Array.isArray(arr)) {
    console.log("Аргумент arr не является массивом");
    return { min: Infinity, max: Infinity, avg: undefined };
  }
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (min >= arr[i]){
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }

    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
