/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 2556;
const expected4 = 9;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
  if (num < 10) return num;

  let newStr = num.toString();

  // console.log(typeof newStr);
  // console.log(parseInt(newStr[0]));

  return sumToOneDigit(
    parseInt(newStr[0]) + sumToOneDigit(parseInt(newStr.substring(1)))
  );
}

console.log(sumToOneDigit(num1), "should be: ", expected1);
console.log(sumToOneDigit(num2), "should be: ", expected2);
console.log(sumToOneDigit(num3), "should be: ", expected3);
console.log(sumToOneDigit(num4), "should be: ", expected4);

/*****************************************************************************/

/* 
  String Anagrams

  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).

  Ok to use built in methods
*/

const two_str1 = "lim";
const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) {}
