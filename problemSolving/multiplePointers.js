/*
Write a function called sumZero which accepts a sorted array of integers. 
The function find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

// Big O(n)

function sumZero(arr) {
  // Sort the array if its not sorted
  arr = arr.sort((a, b) => {
    return a - b;
  });
  //   left and right pointer
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);

/*
Implement a function which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

// Big O(n)

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  // Sort the array if its not sorted
  arr = arr.sort((a, b) => {
    return a - b;
  });
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
