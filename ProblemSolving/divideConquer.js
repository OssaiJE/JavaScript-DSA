/*
Given a sorted array of integers, write a function that accepts a value and returns the INDEX where the value passed to the function is located. if the value is not found, return -1.
*/

// Big O(logN)

function search(arr, val) {
    if (arr.length === 0) return -1;

    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        // let currentElement = arr[middle];
        // console.log(currentElement);
        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1
}

search([1,2,3,4,5,6,7,8,9], 5)