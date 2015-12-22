let input = require('./input');
let fs = require('fs');

function containsAtLeastNVowels(str, n) {
  let match = str.match(/[aeiou]/g);
  let test = match !== null && match.length >= n;

  console.log(`${str} containsAtLeastNVowels is ${test}`);
  return test;
}

function containsConsecutiveLetters(str) {
  for (var i = 0; i + 1 < str.length; i += 2) {
    let firstLetter = str[i];
    let secondLetter = str[i + 1];

    if (firstLetter === secondLetter) {
      console.log(`${str} does contain consecutive letters`);
      return true;
    }
  }

  console.log(`${str} does NOT contain consecutive letters`);
  return false;
}

function contains(str, str2) {
  return str.indexOf(str2) >= 0;
}

function isNice(str) {
  console.log(`String to process is ${str}`);
  let isStringNice = containsAtLeastNVowels(str, 3) &&
                     containsConsecutiveLetters(str) &&
                     !contains(str, "ab") &&
                     !contains(str, "cd") &&
                     !contains(str, "pq") &&
                     !contains(str, "xy");

  return isStringNice;
}

function countNiceWords(words) {
  let count = 0;
  let naughtyWordCount = 0;

  for (var i = 0; i < words.length; i++) {
    console.log(`Word is ${words[i]}`)
    if (isNice(words[i])) {
      count += 1;
    } else {
      naughtyWordCount += 1;
    }
  }

  console.log(`There are ${naughtyWordCount} naughty words`);

  return count;
}

let inputArr = input.split('\n');
let niceWordCount = countNiceWords(inputArr);
console.log(`There are ${niceWordCount} nice words`);
