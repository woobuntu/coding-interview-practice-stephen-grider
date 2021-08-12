// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let rightPointer = str.length - 1;
  for (
    leftPointer = 0;
    leftPointer <= Math.floor(str.length / 2);
    leftPointer++
  )
    if (str[leftPointer] !== str[rightPointer - leftPointer]) return false;

  return true;
}

module.exports = palindrome;
