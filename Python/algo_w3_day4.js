// hello
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

  for (var i = 1; i < nums.length; i++) {
    console.log(i);
  }
}

console.log(dedupeSorted(nums1), expected1);
console.log(dedupeSorted(nums2), expected2);
console.log(dedupeSorted(nums3), expected3);
console.log(dedupeSorted(nums4), expected4);
