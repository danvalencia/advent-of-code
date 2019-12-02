let input = require('./input');

function containsAtLeastNVowels(str, n) {
  let match = str.match(/[aeiou]/g);
  let test = match !== null && match.length >= n;

  return test;
}

function containsConsecutiveLetters(str) {
  for (var i = 0; i + 1 < str.length; i += 1) {
    let firstLetter = str[i];
    let secondLetter = str[i + 1];

    if (firstLetter === secondLetter) {
      return true;
    }
  }

  return false;
}

function contains(str, str2) {
  return str.indexOf(str2) >= 0;
}

function isNice(str) {
  let nVowels = containsAtLeastNVowels(str, 3);
  let consecutiveLetters = containsConsecutiveLetters(str);
  let forbidden = !contains(str, "ab") &&
                     !contains(str, "cd") &&
                     !contains(str, "pq") &&
                     !contains(str, "xy");

  return nVowels && consecutiveLetters && forbidden;
}

function countNiceWords(words) {
  let count = 0;

  for (var i = 0; i < words.length; i++) {
    if (isNice(words[i])) {
      count += 1;
    }
  }

  return count;
}

let inputArr = input.split('\n');
let niceWordCount = countNiceWords(inputArr);
console.log(`Nice strings ${niceWordCount}`);
