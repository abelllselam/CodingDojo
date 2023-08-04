// // // The below code snip is to demonstrate the Onclick properties 
// // // function example(element) {
// // //     console.log("element clicked", element);
// // // }
// // // ------------------------------

// // // The below example is to demonstrate "this" property
// // function turnOff(element) {
// //     element.innerText = "Off";
// // }

// // function hide(element) {
// //     element.remove();
// // }

// //07/24/2023
// // TODO: Print all the integers from 1 to 255.
// // function print1to255(){
// //     for (var i = 1; i<=255; i++)
// //     console.log (i);
// // }

// // print1to255();

// // TODO: Print integers from 0 to 255, and with each integer print the sum so far.
// // function printIntsAndSum0to255(){
// //     var sum = 0;
// //     for (var i = 0; i<=255; i++) {
// //     sum = sum+i;
// //     console.log ("The sum so far = ", sum , "The current integer is: " , i);
// //     }

// // }

// // printIntsAndSum0to255();

// // TODO: Given an array, find and print its largest element.
// var array = [2,3,10,8];

// function printMaxOfArray(arr){

//     var num = 0;

//     for (var i =0; i < arr.length; i++) {
//         if (arr[i] >num) {
//             num = arr[i]
//         }
//     }
//     console(num);
// }

// printMaxOfArray();

// // TODO: Create an array with all the odd integers between 1 and 255 (inclusive).
// function returnOddsArray1to255(){}

// // TODO: Given an array and a value Y, count and print the number of array values greater than Y.
// function returnArrayCountGreaterThanY(arr, y){}

// // TODO: Given an array, print the max, min and average values for that array.
// function printMaxMinAvgArray(arr){}

// // TODO: Replace any negative array values with 'Dojo'.
// function swapStringForArrayNeg(arr){}

// function swapStringForArrayNeg2(arr){}
    
// // TODO: Print all odd integers from 1 to 255.
// function printOdds1to255(){}

// // TODO: Iterate through a given array, printing each value.
// function printArrayVal(arr){}

// // TODO: Analyze an array’s values and print the average
// function printAvgOfArray(arr){}

// // TODO: Square each value in a given array, returning that same array with changed values
// function squareArrayVals(arr){}

// // TODO: Return the given array, after setting any negative values to zero.
// function zeroOutArrayNegativeVals(arr){}

// // TODO: Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
// function shiftArrayValsLeft(arr){}

/* 
Write two functions:

1. A function that returns a new string that is the given string with the first
  letter capitalized.

2. Given an array of strings,
  return the same array with the first letter of each string capitalized using
  the previously created helper function.

HINT: strings are immutable so to change a string you must create a new version
of it.
*/

/* Tests for capitalize function */
const string1 = "hello";
const expected1 = "Hello";

const string2 = "";
const expected2 = "";

/**
 * Capitalizes the first letter of the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */
// TODO First function, capitalize the first character of a string
function capitalize(string) {
    var newStr = ""
    newStr += string[0].toUpperCase()
    // console.log(string[0].toUpperCase())
    // console.log(string[0])
    //console.log(newStr)
    for(var i = 1; i < string.length; i++){
        newStr += string[i]
    }

    // separate the string by space
    console.log(newStr)
    return newStr;
    
}


capitalize(string1)


/* Tests for capitalization function */
const strings1 = ["hello", "world"];
const expectedStrings1 = ["Hello", "World"];

/**
 * Capitalizes the first letter of each string in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */
// TODO Second function, capitalize the first character of each string in an array of strings
function capitalization(strings) {

    var secondStr = '';

    secondStr = strings[0].toUpperCase()

    console.log(strings[0]);



}

capitalization ();
