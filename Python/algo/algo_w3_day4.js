// // hello
// const nums1 = [1, 1, 1, 1];
// const expected1 = [1];

// const nums2 = [1, 1, 2, 2, 3, 3];
// const expected2 = [1, 2, 3];

// const nums3 = [1, 1, 2, 3, 3, 4];
// const expected3 = [1, 2, 3, 4];

// const nums4 = [1, 1];
// const expected4 = [1];

// /**
//  * De-dupes the given sorted array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums
//  * @returns {Array<number>} The given array deduped.
//  */
// function dedupeSorted(nums) {
//   var arr = [];

//   for (var i = 1; i < nums.length; i++) {
//     console.log(i);
//   }
// }

// console.log(dedupeSorted(nums1), expected1);
// console.log(dedupeSorted(nums2), expected2);
// console.log(dedupeSorted(nums3), expected3);
// console.log(dedupeSorted(nums4), expected4);

// 08/18/2023
/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

const cents5 = 93;
const expected5 = { quarter: 3, dime: 1, nickel: 1, penny: 3 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents cents.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the cents of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
  // start with an object "change"
  // 4 different if statements
  // assign how many coins go into the coin and modular how many coins are left and go to the next line
  let change = {};

  // Math.floor((quarters = cents / 25));
  // cents = cents % 25;
  // Math.floor((dimes = cents / 1));
  // cents = cents % 10;
  // Math.floor((nickels = cents / 5));
  // cents = cents % 5;
  // Math.floor((pennies = cents));
  let quarters, dimes, nickels, pennies;

  if (Math.floor((quarters = cents / 25)) != 0) {
    change.quarters = Math.floor((quarters = cents / 25));
    cents = cents % 25;
  }
  if (Math.floor((dimes = cents / 10)) != 0) {
    change.dimes = Math.floor((dimes = cents / 10));
    cents = cents % 10;
  }
  if (Math.floor((nickels = cents / 5)) != 0) {
    change.nickels = Math.floor((nickels = cents / 5));
    cents = cents % 5;
  }
  if (Math.floor((pennies = cents)) != 0) {
    change.pennies = Math.floor((pennies = cents));
    // cents = cents;
  }

  return change;
}

console.log(fewestCoinChange(cents1), "should equal:", expected1);
console.log(fewestCoinChange(cents2), "should equal:", expected2);
console.log(fewestCoinChange(cents3), "should equal:", expected3);
console.log(fewestCoinChange(cents4), "should equal:", expected4);
console.log(fewestCoinChange(cents5), "should equal:", expected5);
