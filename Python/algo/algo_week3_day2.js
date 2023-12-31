/* 
  Given two arrays, interleave them into one new array.

  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */

function interleaveArrays(arr1, arr2) {
  const newArr = [];

  // Calculate the maximum length between arr1 and arr2
  const longest = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < longest; i++) {
    if (i < arr1.length) {
      newArr.push(arr1[i]);
    }
    if (i < arr2.length) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

console.log(interleaveArrays(arrA1, arrB1), "expected:", expected1);
console.log(interleaveArrays(arrA2, arrB2), "expected:", expected2);
console.log(interleaveArrays(arrA3, arrB3), "expected:", expected3);
console.log(interleaveArrays(arrA4, arrB4), "expected:", expected4);
