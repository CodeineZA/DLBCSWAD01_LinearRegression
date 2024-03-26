// Linear Regression script
// Used Data set from: https://www.vedantu.com/maths/linear-regression
// datasets (x and y values)
const xArray = [2, 4, 6, 8];
const yArray = [3, 7, 5, 10];
console.log(xArray);
console.log(yArray);
// Instantiate x^2 array
let xSquaredArray = [];
// Instantiate xy array
let xyArray = [];
// Calculate x^2 and xy values and push them into respective arrays
for (let i = 0; i < xArray.length; i++) {
    //x * x = x^2
    xSquaredArray.push(xArray[i] * xArray[i]);
    //x * y = xy
    xyArray.push(xArray[i] * yArray[i]);
}

// Calculate sum of an array of numbers
function sum(values) {
    //Reduce method takes two parameters (Accumulator and current value as the initial parameter and '0' as the second which indicates where the sum starts) 
    //and adds the current value to the Accumulator
    return values.reduce((acc, val) => acc + val, 0);
}

// Calculate all the sums
const n = xArray.length;
const sumX = sum(xArray);
const sumY = sum(yArray);
const sumX2 = sum(xSquaredArray);
const sumXY = sum(xyArray);

// Log calculated sum to console
console.log('sumX: ', sumX);
console.log('sumY: ', sumY);
console.log('sumX2: ', sumX2);
console.log('sumXY: ', sumXY);

// Math.pow returns the value of sumX to the power of 2
// Calculate a
const a = (n * sumXY - sumX * sumY) / (n * sumX2 - Math.pow(sumX, 2));

// Calculate b
const b = (sumY * sumX2 - sumX * sumXY) / (n * sumX2 - Math.pow(sumX, 2));

// Results
console.log('Results:');
console.log('a: ', a);
console.log('b: ', b);
