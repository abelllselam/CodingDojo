// 

// 08/04/2023
/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

  const str1 = "a x a";
  const expected1 = true;
  
  const str2 = "racecar";
  const expected2 = true;
  
  const str3 = "Dud";
  const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
  
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
  function isPalindrome(str) {
    var newString = str.split('').reverse().join("");
    var secondString = str.split('');
    // var re = str.split('');

    // console.log(newString);

    //var reverseString = newString.reverse();

    var is_palindrome = true;

     console.log(str);
     console.log(newString);

    if (str === newString) {
      console.log (is_palindrome);
    }

    else {
      console.log(is_palindrome = false);
    }
  }

  isPalindrome(str1);
  isPalindrome(str2);
  isPalindrome(str3);
  isPalindrome(str4);