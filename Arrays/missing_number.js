function missingNumber(a, N) {
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < N - 1; i++) {
    xor2 = xor2 ^ a[i]; // XOR of array elements
    xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
  }
  xor1 = xor1 ^ N; // XOR up to [1...N]

  return xor1 ^ xor2; // the missing number
}

function main() {
  const N = 5;
  const a = [1, 2, 4, 5];
  const ans = missingNumber(a, N);
  console.log("The missing number is:", ans);
}

main();



function missingNumber(a, N) {
  // Summation of first N numbers:
  const summation = (N * (N + 1)) / 2;

  // Summation of all array elements:
  let s2 = 0;
  for (let i = 0; i < N - 1; i++) {
    s2 += a[i];
  }

  const missingNum = summation - s2;
  return missingNum;
}

function main() {
  const N = 5;
  const a = [1, 2, 4, 5];
  const ans = missingNumber(a, N);
  console.log("The missing number is:", ans);
}

main();





function missingNumber(a, N) {
  const hash = new Array(N + 1).fill(0); // hash array

  // storing the frequencies:
  for (let i = 0; i < N - 1; i++) {
    hash[a[i]]++;
  }

  // checking the frequencies for numbers 1 to N:
  for (let i = 1; i <= N; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }

  // The following line will never execute.
  // It is just to avoid warnings.
  return -1;
}

function main() {
  const N = 5;
  const a = [1, 2, 4, 5];
  const ans = missingNumber(a, N);
  console.log("The missing number is:", ans);
}

main();



