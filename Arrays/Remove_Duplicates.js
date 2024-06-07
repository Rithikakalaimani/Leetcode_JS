function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

function removeDuplicate(arr) {
  let set = new Set(arr);
  let uniqueArr = Array.from(set);
  for (let i = 0; i < uniqueArr.length; i++) {
    arr[i] = uniqueArr[i];
  }
  return uniqueArr.length;
}
const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr);
const l = removeDuplicate(arr);
console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
  console.log(arr[i]);
}
console.log("The array after removing duplicate elements is:");
for (let i = 0; i < l; i++) {
  console.log(arr[i]);
}
