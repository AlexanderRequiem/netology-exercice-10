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

  return resultArr; // array
}
