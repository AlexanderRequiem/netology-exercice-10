// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
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
  sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода

  max = Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let tmpSum = func(arrOfArr[i]);
    if (max === Infinity || max < tmpSum) {
      max = tmpSum;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return Math.abs(max-min);
}
