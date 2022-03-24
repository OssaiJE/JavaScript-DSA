// Method	        Description

// concat()	Joins two or more arrays, and returns a copy of the joined arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2); // [Cecilie,Lone,Emil,Tobias,Linus]

// constructor	Returns the function that created the Array object's prototype
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor; // function Array() { [native code] }

// copyWithin()	Copies array elements within the array, to and from specified positions
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2); // [Banana,Orange,Banana,Orange,Kiwi,Papaya]

// entries()	Returns a key/value pair Array Iteration Object
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
  console.log(x); // [0, "Banana"] [1, "Orange"][2, "Apple"][3, "Mango"];
}

// every()	Checks if every element in an array pass a test
const ages = [32, 33, 16, 40];
ages.every(checkAge); // false
function checkAge(age) {
  return age > 18;
}

// fill()	Fill the elements in an array with a static value
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi"); // [Kiwi,Kiwi,Kiwi,Kiwi]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4); // [Banana,Orange,Kiwi,Kiwi]

// filter()	Creates a new array with every element in an array that pass a test
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult); // [32,33,40]
function checkAdult(age) {
  return age >= 18;
}

// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// forEach()	Calls a function for each array element
// from()	Creates an array from an object
// includes()	Check if an array contains the specified element
// indexOf()	Search the array for an element and returns its position
// isArray()	Checks whether an object is an array
// join()	Joins all elements of an array into a string
// keys()	Returns a Array Iteration Object, containing the keys of the original array
// length	Sets or returns the number of elements in an array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// map()	Creates a new array with the result of calling a function for each array element
// pop()	Removes the last element of an array, and returns that element
// prototype	Allows you to add properties and methods to an Array object
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// some()	Checks if any of the elements in an array pass a test
// sort()	Sorts the elements of an array
// splice()	Adds/Removes elements from an array
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length
// valueOf()	Returns the primitive value of an array
