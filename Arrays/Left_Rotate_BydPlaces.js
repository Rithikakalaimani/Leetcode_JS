function rotate(nums, k) {
  const n = nums.length;
  k = k % n;
  reverse(nums, 0, n - k - 1);
  reverse(nums, n - k, n - 1);
  reverse(nums, 0, n - 1);
  
}

function reverse(nums, i, j) {
  let temp = 0;
  while (i < j) {
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums); // Output will be [5, 6, 7, 1, 2, 3, 4]
