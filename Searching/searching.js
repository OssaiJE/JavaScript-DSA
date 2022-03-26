/**
 * LINEAR SEARCH ALGORITHMS
 */
// Big O(n)

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 100, 687], 100); // 7

/**
 * BINARY SEARCH ALGORITHMS
 */

// Big O(n)
