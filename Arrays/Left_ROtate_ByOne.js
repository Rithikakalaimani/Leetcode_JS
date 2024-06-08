function solve1(arr, n) {
  let temp = new Array(n);
  for (let i = 1; i < n; i++) {
    temp[i - 1] = arr[i];
  }
  temp[n - 1] = arr[0];
  for (let i = 0; i < n; i++) {
    console.log(temp[i] + " ");
  }
  console.log();
}

let n1 = 5;
let arr1 = [1, 2, 3, 4, 5];
solve1(arr1, n1);


function solve2(arr, n) {
  let temp = arr[0]; // storing the first element of the array in a variable
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp; // assign the value of the variable at the last index
  for (let i = 0; i < n; i++) {
    console.log(arr[i] + " ");
  }
}

let n2 = 5;

let arr2 = [1, 2, 3, 4, 5];
solve2(arr2, n2);


