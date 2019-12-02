let route = require("./input");

const UP    = '^';
const DOWN  = 'v';
const LEFT  = '<';
const RIGHT = '>';

function santaHasDeliveredPresentsToHouse(processedHouses, currentHouse) {
  let currentHouseAddress = getHouseAddress(currentHouse);
  return processedHouses[currentHouseAddress] != undefined;
}

function calculateNextHouse(route, currentHouse) {
  let nextDirection = route.substr(0,1);
  let nextHouse;

  switch (nextDirection) {
    case UP:
      nextHouse = [currentHouse[0], currentHouse[1] + 1];
      break;
    case DOWN:
      nextHouse = [currentHouse[0], currentHouse[1] - 1];
      break;
    case LEFT:
      nextHouse = [currentHouse[0] - 1, currentHouse[1]];
      break;
    case RIGHT:
      nextHouse = [currentHouse[0] + 1, currentHouse[1]];
      break;
    default:
      throw Error("Invalid nextDirection");
  }

  console.log(`Moving ${nextDirection} from [${currentHouse[0]}, ${currentHouse[1]}] to [${nextHouse[0]}, ${nextHouse[1]}]`)

  return nextHouse;
}

function getHouseAddress(house) {
  return `${house[0]},${house[1]}`;
}

function deliverPresents(route, currentHouse, processedHouses) {
  if (!santaHasDeliveredPresentsToHouse(processedHouses, currentHouse)) {
    console.log("House has not been processed");
    processedHouses[getHouseAddress(currentHouse)] = 1;
  }

  if (route.length > 0) {
    let nextHouse = calculateNextHouse(route, currentHouse);
    let numberOfVisits = processedHouses[getHouseAddress(currentHouse)] || 0;
    processedHouses[getHouseAddress(currentHouse)] += numberOfVisits;

    if (numberOfVisits == 1){
      return 1 + deliverPresents(route.substr(1), nextHouse,  processedHouses);
    } else {
      return 0 + deliverPresents(route.substr(1), nextHouse, processedHouses);
    }
  } else {
    return 0;
  }
}

let duplicates = deliverPresents(route, [0,0],  {});

console.log(`Number of duplicate houses is ${duplicates}`);
