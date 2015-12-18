let input = require('./input');

function findFloor(floorSpec) {
  if (floorSpec.length > 0) {
    const firstChar = floorSpec.substr(0,1);
    if (firstChar == '(') {
      return 1 + findFloor(floorSpec.substr(1));
    } else if (firstChar == ')') {
      return -1 + findFloor(floorSpec.substr(1));
    } else {
      throw Error("Supported characters are ( and )");
    }
  } else {
    return 0;
  }

  console.log("hello world!");
}

let floorNo = findFloor(input);
console.log(`Floor number is ${floorNo}`);
