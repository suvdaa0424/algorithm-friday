// 1.  Write a function that will take an array and return true if the array contains a string including the letter 'a'. (some)
//     > Test Data: `['hello', null, 0, 10, 'false', -2, true, false]`
//     > 
//     > Result: `true`

function allStringsContainA(arr) {

}

const testData1 = ['hello', null, 0, 10, 'false', -2, true, false];
console.log(allStringsContainA(testData1));

// 2.  Write a function that will take an array and return false if any of the items in the array are numbers (some)
//     > Test Data: `['hello', null, 0, 10, 'false', -2, true, false]`
//     > 
//     > Result: `false`

function allStrings(arr) {

}

const testData2 = ['hello', null, 0, 10, 'false', -2, true, false];
console.log(allStrings(testData2));

// 3.  Write a function that will take an array and return true if all of the items are booleans (every)
//      > Test Data: `[true, false, true, false, true, false]`
//      > 
//      > Result: `true`

function allBooleans(arr) {

}

const testData3 = [true, false, true, false, true, false];
console.log(allBooleans(testData3));

// 4.  Write a function that will take an array and return true if all of the items are truthy (every)
//      > Test Data: `['hello', 10, 'false', -2, true]`
//      > 
//      > Result: `true`

function allTruthy(arr) {

}

const testData4 = ['hello', 10, 'false', -2, true];
console.log(allTruthy(testData4));


// 5.  Write a JavaScript function to remove. `null`, `0`, `""`, `false`, `undefined` and `NaN` values from an array (filter)
//     > Test Data: `['hello', null, 0, 10, 'false', -2, true, false]`
//     > 
//     > Result: `['hello', 10, 'false', -2, true]`

function removeFalsy(arr) {

}

const testData5 = ['hello', null, 0, 10, 'false', -2, true, false];
console.log(removeFalsy(testData5));


// 6.  Write a JavaScript function to remove duplicate items from an array. (filter)
//     > Test Data: `['hello', 'hello', 'world', 'world']`
//     > 
//     > Result: `['hello', 'world']`

function removeDuplicates(arr) {

}

const testData6 = ['hello', 'hello', 'world', 'world'];
console.log(removeDuplicates(testData6));

// 7.  Find all the strings in a array that are less than 6 characters (filter)
//     > Test Data: `['hello', 'pancake', 'banana', 'waffle', 'world']`
//     > 
//     > Result: `['hello', 'world']`

function lessThanSix(arr) {

}

const testData7 = ['hello', 'pancake', 'banana', 'waffle', 'world'];
console.log(lessThanSix(testData7));

// 8.  Take an array of numbers and return a new doubles of the original (map)
//     > Test Data: `[8, 10, -12, 3339, 438567, 1, 0, 99]`
//     > 
//     > Result: `[16, 20, -24, 6678, 877134, 2, 0, 198]`

function double(arr) {

}

const testData8 = [8, 10, -12, 3339, 438567, 1, 0, 99];
console.log(double(testData8));

// 9.  Take an array of numbers and return a new array of strings 'Item X:' where X is the number (map)
//     > Test Data: `[4, 5, 6, 7, 8, 99]`
//     > 
//     > Result: `['Item 4:', 'Item 5:', 'Item 6:', 'Item 7:', 'Item 8:', 'Item 99:']`

function itemX(arr) {

}

const testData9 = [4, 5, 6, 7, 8, 99];
console.log(itemX(testData9));

// 10. Capitalize each of an array of names. (map)
//     > Test Data: `['steve', 'carol', 'tony', 'peter', 'natasha']`
//     > 
//     > Result: `['Steve', 'Carol', 'Tony', 'Peter', 'Natasha']`

function capitalize(arr) {

}

const testData10 = ['steve', 'carol', 'tony', 'peter', 'natasha'];
console.log(capitalize(testData10));

// 11. Write a function that will take an array and return the sum of all the values. (reduce)
//     > Test Data: `[19, 28, 47848, 128, 1, 92]`
//     > 
//     > Result: `48116`

function sum(arr) {
  
}

const testData11 = [19, 28, 47848, 128, 1, 92];
console.log(sum(testData11));

// 12. Write a function that will take an array and return the highest value. (reduce)
//     > Test Data: `[19, 28, 47848, 128, 1, 92]`
//     > 
//     > Result: `47848`
function highest(arr) {

}

const testData12 = [19, 28, 47848, 128, 1, 92];
console.log(highest(testData12));