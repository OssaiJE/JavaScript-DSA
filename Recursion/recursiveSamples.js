/*
 * CountDown function
 */

// Recursive Version
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(4); // Returns 4, 3, 2, 1

// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}
countDown(4); // Returns 4, 3, 2, 1

/**
 * Calculating SUM RANGES
 */
// Recursive Version
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(4); // Returns 10

/**
 * Finding FACTORIALS
 */

// Iterative Version
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
factorial(4); // Returns 24

// Recursive Version
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
factorial(4); // Returns 24

/**
 * Collect odd values
 */

// Helper method Recursive Version
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // The SLICE METHOD gives a new array from that position
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Returns [1, 3, 5, 7, 9]

// Pure Recursive version
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // The SLICE METHOD gives a new array from that position
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Returns [1, 3, 5, 7, 9]
