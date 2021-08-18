// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hashOfInputString = str
    .split("")
    .reduce(
      (hash, char) => (
        hash.hasOwnProperty(char) ? hash[char]++ : (hash[char] = 1), hash
      ),
      {}
    );
  return Object.entries(hashOfInputString).sort(
    ([keyOfFormer, countOfFormer], [keyOfLatter, countOfLatter]) =>
      countOfFormer > countOfLatter ? -1 : 1
  )[0][0];
}

module.exports = maxChar;
