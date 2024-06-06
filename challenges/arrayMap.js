function subarraySum(arr, target) {
  let sum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum > target) {
      sum -= arr[start];
      start++;
    }

    if (sum === target) {
      return true;
    }
  }

  return false;
}


// Test the subarraySum function
console.log(subarraySum([4, 2, 7, 1, 9, 5], 17)); // Output: true
console.log(subarraySum([1, 2, 3, 4, 5], 9)); // Output: true
console.log(subarraySum([1, 2, 3, 4, 5], 20)); // Output: false
