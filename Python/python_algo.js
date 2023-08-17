// /*
// // 08/15/2023
//   Array: Binary Search (non recursive)

//   Given a sorted array and a value, return whether the array contains that value.
//   Do not sequentially iterate the array. Instead, ‘divide and conquer’,
//   taking advantage of the fact that the array is sorted .

//   Bonus (alumni interview):
//     first complete it without the bonus, because they ask for additions
//     after the initial algo is complete

//     return how many times the given number occurs
// */

// const nums1 = [1, 3, 5, 6];
// const searchNum1 = 4;
// const expected1 = false;

// const nums2 = [4, 5, 6, 8, 12];
// const searchNum2 = 5;
// const expected2 = true;

// const nums3 = [3, 4, 6, 8, 12];
// const searchNum3 = 3;
// const expected3 = true;

// // bonus, how many times does the search num appear?
// const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
// const searchNum4 = 2;
// const expected4 = 4;

// /**
//  * Efficiently determines if the given num exists in the given array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} sortedNums
//  * @param {number} searchNum
//  * @returns {boolean} Whether the given num exists in the given array.
//  */
// function binarySearch(sortedNums, searchNum) {
//   // pseudocode
//   // your code here
//   let start = 0;
//   let end = sortedNums.length - 1;

//   // Find the mid index

//   // Iterate while start not meets end
//   while (start <= end) {
//     let mid = start + Math.floor((start + end) / 2);
//     // If element is present at mid, return True
//     if (sortedNums[mid] === searchNum) return true;
//     // Else look in left or right half accordingly
//     else if (sortedNums[mid] < searchNum) start = mid + 1;
//     else end = mid - 1;
//   }

//   return false;
// }

// console.log(binarySearch(nums1, searchNum1), "should equal", expected1);
// console.log(binarySearch(nums2, searchNum2), "should equal", expected2);
// console.log(binarySearch(nums3, searchNum3), "should equal", expected3);

/* 
  08/17/2023
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
  var arr = [];
  var temp = nums[0];

  for (var i = 1; i < nums.length; i++) {
    if ((temp = num[1])) {
      temp = num[1];
      arr = nums.push();
      continue;
    } else {
      arr = nums.push();
    }
  }
}

console.log(dedupeSorted(nums1), expected1);
console.log(dedupeSorted(nums2), expected2);
console.log(dedupeSorted(nums3), expected3);
console.log(dedupeSorted(nums4), expected4);
