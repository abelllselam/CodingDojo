// // // /*
// // // Parens Valid

// // // Given an str that has parenthesis in it
// // // return whether the parenthesis are valid
// // // */

// // // const str1 = "Y(3(p)p(3)r)s";
// // // const expected1 = true;

// // // const str2 = "N(0(p)3";
// // // const expected2 = false;
// // // // Explanation: not every parenthesis is closed.

// // // const str3 = "N(0)t ) 0(k";
// // // const expected3 = false;
// // // // Explanation: because the second ")" is premature: there is nothing open for it to close.

// // // const str4 = "a(b))(c";
// // // const expected4 = false;
// // // // Explanation: same number of opens and closes but the 2nd closing closes nothing.

// // // /**
// // //  * Determines whether the parenthesis in the given string are valid.
// // //  * Each opening parenthesis must have exactly one closing parenthesis.
// // //  * - Time: O(?).
// // //  * - Space: O(?).
// // //  * @param {string} str
// // //  * @returns {boolean} Whether the parenthesis are valid.
// // //  */
// // // function parensValid(str) {
// // //   //split the string and push to new array
// // //   //var newStr = str.split("");
// // //   // if condition checking the number of parenthesis
// // //   // console.log(newStr);
// // //   var arr = [];

// // //   // var leftPara = ")";
// // //   // var rightPara = "(";
// // //   // var countLeft = 0;
// // //   // var countRight = 0;

// // //   for (let char of str) {

// // //   }
// // // }

// // // parensValid(str1);

// // //08/10/2023
// // /*
// //   String: Rotate String

// //   Create a standalone function that accepts a string and an integer,
// //   and rotates the characters in the string to the right by that given
// //   integer amount.
// // */

// // const str = "Hello World";

// // const rotateAmnt1 = 0;
// // const expected1 = "Hello World";

// // const rotateAmnt2 = 1;
// // const expected2 = "dHello Worl";

// // const rotateAmnt3 = 2;
// // const expected3 = "ldHello Wor";

// // const rotateAmnt4 = 4;
// // const expected4 = "orldHello W";

// // const rotateAmnt5 = 13;
// // const expected5 = "ldHello Wor";
// // /*
// // Explanation: this is 2 more than the length so it ends up being the same
// // as rotating it 2 characters because after rotating every letter it gets back
// // to the original position.
// // */

// // /**
// //  * Rotates a given string's characters to the right by the given amount,
// //  * wrapping characters to the beginning.
// //  * - Time: O(?).
// //  * - Space: O(?).
// //  * @param {string} str
// //  * @param {number} amnt The amount of characters in the given str to rotate to the
// //  *    right.
// //  * @returns {string} The string rotated by the given amount.
// //  */
// // function rotateStr(str, amnt) {
// //   // create an empty string
// //   let output = "";

// //   // for loop to go through the string
// //   for (var i = 0; i < str.length; i++) {
// //     output = str.slice(str.length - amnt) + str.slice(0, str.length - amnt);
// //     // console.log(output);
// //     // console.log(str);
// //   }
// //   return output;
// //   //
// // }

// // console.log(rotateStr(str, rotateAmnt1));
// // console.log(rotateStr(str, rotateAmnt2));
// // console.log(rotateStr(str, rotateAmnt3));
// // console.log(rotateStr(str, rotateAmnt4));
// // console.log(rotateStr(str, rotateAmnt5));

// // 08/11/2023
// /*
//   An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//   typically using all the original letters exactly once.

//   Is there a quick way to determine if they aren't an anagram before spending more time?

//   Given two strings
//   return whether or not they are anagrams
// */

// const strA1 = "yes";
// const strB1 = "eys";
// const expected1 = true;

// const strA2 = "yes";
// const strB2 = "eYs";
// const expected2 = true;

// const strA3 = "no";
// const strB3 = "noo";
// const expected3 = false;

// const strA4 = "silent";
// const strB4 = "listen";
// const expected4 = true;

// /**
//  * Determines whether s1 and s2 are anagrams of each other.
//  * Anagrams have all the same letters but in different orders.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} s1
//  * @param {string} s2
//  * @returns {boolean} Whether s1 and s2 are anagrams.
//  */
// function isAnagram(s1, s2) {
//   firstString = sl.slice("");
//   secondString = s2.slice("");

//   console.log(firstString);
//   console.log(secondString);
// }

// isAnagram(strA1, strB1);

// 08/14/2023
/* 
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
  if (nums.length < 3) {
    return -1;
  }
}
