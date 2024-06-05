// bruteforce
function sortArr(arr) {
  arr.sort((a, b) => a - b); //sort the array
  return arr[arr.length - 1]; // return the last element
}

const arr1 = [2, 5, 1, 3, 0];
const arr2 = [8, 10, 5, 7, 9];

console.log("The Largest element in the array is: " + sortArr(arr1));
console.log("The Largest element in the array is: " + sortArr(arr2));

// recursive approach
function findLargestElement(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const arr3 = [2, 5, 1, 3, 0];
let max = findLargestElement(arr3);
console.log("The largest element in the array is: " + max);

const arr4 = [8, 10, 5, 7, 9];
max = findLargestElement(arr4);
console.log("The largest element in the array is: " + max);



