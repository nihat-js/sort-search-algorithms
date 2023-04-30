function insertionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    let current = inputArr[i];
    let j = i - 1;
    while ((j > -1) && (current < inputArr[j])) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  return inputArr;
}



function f(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.length == 0) {
      newArr.push(arr[i])
    } else {
      for (let j = 0; j < newArr.length; j++) {
        if (arr[i] >= newArr[j] &&  ( arr[i] <= newArr[j + 1]  || typeof  arr[j+1] === undefined  ) ) {
          newArr.push(arr[i])
        }
      }
    }
  }


  return newArr
}


// 10 20 40 80  60  

console.log(f([10, 50, 20, 30, 1, 88, 23, 67, 1025, 2, 7]))