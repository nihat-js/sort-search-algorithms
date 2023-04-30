function linearSearch(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
      return i;
    }
  }
}





function binarySearch(arr, number) {
  let result = arr
  while (true) {
    result = binaryMethod(result, number)
    if (typeof result == "number") {
      return result
    }
  }

}

function binaryMethod(arr, number) {
  // console.log("now",arr,number)
  let middle = Math.floor(arr.length / 2)

  if (arr[middle] == number) {
    return middle
  } else if (number > arr[middle]) {
    return arr.splice(middle + 1,)
  } else {
    return arr.splice(0, middle)
  }
}


function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  let newArr = []
  // arr.splice(0,1)
  while (arr.length > 0) {
    // console.log("now old arr is" + arr)
    min = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[min] > arr[i]) {
        min = i
      }
    }
    // console.log("and minimum is "+ arr[min])
    newArr.push(arr[min])
    arr.splice(min, 1)
  }
  return newArr
}



function mergeSort(arr) {
  let newArr = [], left, right


  // let half = Math.floor(arr.length / 2)
  // let left = arr.splice(0, half)
  // let right = arr
  while (true) {
    if (left.length > 1) {

    }
  }
}

function quickSort(arr) {
  
  let pivot = arr[0]
  let left = []
  // let leftPivot 
  let right = []
  // let rightPivot = 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    }else{
      left.push(arr[i])
    }
  }
   arr = [...left,pivot,...right]
  console.log(arr)
}

function quickSortMethod(arr) {
  if (arr.length <=1){
    return arr
  }
  let pivot = arr[0]
  let left = []
  let right = []

  for (let i = 1; i < arr.length; i++) {
  }

  return [...left]
}


quickSort( [10, 50, 20, 30, 1, 88, 23,67,1025,2,7])

// console.log(linearSearch([10,25,30,12,92,62],92))
// console.log("Founded in" + binarySearch([10, 25, 30, 50, 60, 90, 120, 150], 30))

// console.log(bubbleSort([15,20,3,11,2,9,65]))
// console.log(selectionSort([10, 50, 20, 30, 1, 88, 23]))









