function compareArrays(arr1, arr2) {
  let result;
  
  // Ваш код
  if (arr1.length !== arr2.length) {
    return false;
  }

  result = arr1.every((item, index) => item === arr2[index]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  let resultArrayStage_0 = arr.filter(item => item > 0);
  let resultArrayStage_1 = resultArrayStage_0.filter( item => item % 3 === 0);
  resultArr = resultArrayStage_1.map(item => item * 10);
  
  return resultArr; // array
}
