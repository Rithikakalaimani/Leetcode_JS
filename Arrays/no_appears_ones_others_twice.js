function getSingleElement(arr) {
  // XOR all the elements:
  let xorr = 0;
  for (let i = 0; i < arr.length; i++) {
    xorr = xorr ^ arr[i];
  }
  return xorr;
}

function main() {
  let arr = [4, 1, 2, 1, 2];
  let ans = getSingleElement(arr);
  console.log("The single element is:", ans);
}

main();


function getSingleElement(arr) {
  // Size of the array:
  const n = arr.length;

  // Declare the hashmap.
  // And hash the given array:
  const hashmap = new Map();
  for (let i = 0; i < n; i++) {
    const num = arr[i];
    hashmap.set(num, (hashmap.get(num) || 0) + 1);
  }

  // Find the single element and return the answer:
  for (const [num, count] of hashmap) {
    if (count === 1) {
      return num;
    }
  }

  // This line will never execute
  // if the array contains a single element.
  return -1;
}

function main() {
  const arr = [4, 1, 2, 1, 2];
  const ans = getSingleElement(arr);
  console.log("The single element is:", ans);
}

main();








function getSingleElement(arr) {
  // Size of the array:
  let n = arr.length;

  // Find the maximum element:
  let maxi = arr[0];
  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, arr[i]);
  }

  // Declare hash array of size maxi+1
  // And hash the given array:
  let hash = new Array(maxi + 1).fill(0);
  for (let i = 0; i < n; i++) {
    hash[arr[i]]++;
  }

  // Find the single element and return the answer:
  for (let i = 0; i < n; i++) {
    if (hash[arr[i]] === 1) {
      return arr[i];
    }
  }

  // This line will never execute
  // if the array contains a single element.
  return -1;
}

function main() {
  let arr = [4, 1, 2, 1, 2];
  let ans = getSingleElement(arr);
  console.log("The single element is:", ans);
}

main();


