/*
Write a function that accepts two arrays and return TRUE,
if every value in the array has it's corresponding value squared in the second array. 
The frequency of the value must be thesame.
*/

// Big O(n)

function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  arr1 = arr1.sort((a, b) => {
    return a - b;
  });
  arr2 = arr2.sort((a, b) => {
    return a - b;
  });
  arr1 = arr1.map(function (x) {
    return Math.pow(x, 2);
  });
  // console.log(arr1);
  if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
    return true;
  }
  return false;
}

// var time1 = performance.now();
same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]); // Returns true
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase or name formed by rearranging the letters of another, such as "cinema" formed from "iceman".
*/

// Big O(n)

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  //   console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

validAnagram("anagram", "nagaram"); // Returns true
