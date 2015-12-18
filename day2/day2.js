let inputBoxes = require('./input');

function wrappingPaperForBoxWithDimensions(l, w, h) {
  let surface1 = l * h;
  let surface2 = w * h;
  let surface3 = l * w;

  let minSurface = Math.min(surface3, Math.min(surface1, surface2));

  return (2 * surface1) + (2 * surface2) + (2 * surface3) + minSurface;
}

function calculateTotalWrappingPaper(input) {
  let tokenizedInput = input.split("\n");
  let totalArea = 0;

  for (let boxIndex in tokenizedInput) {
    // console.log("Box dimension is: " + tokenizedInput[boxIndex]);
    let boxDimensions = tokenizedInput[boxIndex].split('x');
    let l = boxDimensions[0];
    let w = boxDimensions[1];
    let h = boxDimensions[2];

    totalArea += wrappingPaperForBoxWithDimensions(l, w, h);

    console.log(`Wrapping paper for area: Length: ${l}, Width: ${w}, Height: ${h} is ${totalArea}`);
  }

  return totalArea;
}

let totalWrappingPaper = calculateTotalWrappingPaper(inputBoxes);

console.log(`Total wrapping paper: ${totalWrappingPaper} sqft`);
