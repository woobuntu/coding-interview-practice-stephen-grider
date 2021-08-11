// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split("").reverse().join("");
  // 이렇게 풀라고 낸 문제는 아니겠지...

  let reversedStr = "";
  for (const char of str) reversedStr = char + reversedStr;
  return reversedStr;
}

module.exports = reverse;
