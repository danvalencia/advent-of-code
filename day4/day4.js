let crypto = require('crypto');

const input = 'yzbqklnj';

function hashTheSecret(secret) {
  let hash = crypto.createHash('md5');
  return hash.update(secret).digest('hex');
}

function startsWithZero(str) {
  return str != undefined && str.length > 0 && str.substr(0,1) === '0';
}

function startsWithNZeroes(str, n) {
  if (n == 0) {
    return true;
  }

  if (startsWithZero(str)) {
    return startsWithNZeroes(str.substr(1), n - 1);
  } else {
    return false;
  }
}

function findHashForSecretWith5Zeroes(prefix) {
  for (let num = 0; true; num++) {
    let secret = prefix + num;
    let hashedSecret = hashTheSecret(secret);
    console.log(`MD5 for Secret ${secret} is ${hashedSecret}`);

    let letterCount = 0;
    if(startsWithNZeroes(hashedSecret, 5)) {
      return num;
    }
  }
}

let hashWith5StartingZeroes = findHashForSecretWith5Zeroes(input);
console.log(`Hash with 5 leading zeroes for prefix ${input}is ${hashWith5StartingZeroes}`);
