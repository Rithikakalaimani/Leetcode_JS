function moveZeros1(n, a) {
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (a[i] !== 0) {
      temp.push(a[i]);
    }
  }
  // Number of non-zero elements
  let nz = temp.length;
  // Copy elements from temp and fill the first nz fields of the original array
  for (let i = 0; i < nz; i++) {
    a[i] = temp[i];
  }
  // Fill the rest of the cells with 0
  for (let i = nz; i < n; i++) {
    a[i] = 0;
  }

  return a;
}
let arr1 = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n1 = 10;
let ans1 = moveZeros1(n1, arr1);
console.log(ans1.join(" "));




function moveZeros2(n, a) {
  let j = -1;

  // Place the pointer j
  for (let i = 0; i < n; i++) {
    if (a[i] === 0) {
      j = i;
      break;
    }
  }

  // No non-zero elements
  if (j === -1) return a;

  // Move the pointers i and j and swap accordingly
  for (let i = j + 1; i < n; i++) {
    if (a[i] !== 0) {
      [a[i], a[j]] = [a[j], a[i]];
      j++;
    }
  }

  return a;
}

let arr2 = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n2 = 10;
let ans2 = moveZeros2(n2, arr2);
console.log(ans2.join(" "));




