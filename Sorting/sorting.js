/**
 * BUILT IN SORTING
 */
var arr1 = [1, 2, 10, 3, 25, 2, 5];
arr1.sort((a, b) => {
  return a - b; // [1, 2, 2, 3, , 5, 10, 25]
});

/**
 * BUBBLE SORT ALGORITHMS
 */

// Big O(n^2)

function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 22, 3, 10, 4, 5, 6]); // [1, 2, 3, 4, 5, 6, 8, 10, 22]

/**
 * SELECTION SORT ALGORITHM
 */

// Big O(n^2)

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]); // [0, 2, 10, 17, 19, 22, 34]

/**
 * INSERTION SORT ALGORITHM
 */

// Big O(n^2)

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]); // [1, 2, 4, 9, 76]
