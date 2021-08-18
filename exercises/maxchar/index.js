// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hashOfInputString = {};

  let maxCount = 1;
  let mostFrequentlyUsedChar = str[0];

  for (const char of str) {
    if (hashOfInputString.hasOwnProperty(char)) {
      hashOfInputString[char]++;
      if (hashOfInputString[char] > maxCount) mostFrequentlyUsedChar = char;
    } else {
      hashOfInputString[char] = 1;
    }
  }

  return mostFrequentlyUsedChar;
}

module.exports = maxChar;
