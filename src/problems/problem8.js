// src/problems/problem8.js
// Warmup-1  posNeg problem

// Problem Description
export const problemDescription = `
  <h2>Problem: posNeg</h2>
  <p>Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.</p>
  <p>Example:</p>
  <pre>
  posNeg(1, -1, false) → true
  posNeg(-1, 1, false) → true
  posNeg(-4, -5, true) → true
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function posNeg(a, b, negative) {
    if (negative) {
      // If negative is true, return true if both are negative
      return a < 0 && b < 0;
    } else {
      // If negative is false, return true if one is negative and the other is positive
      return (a < 0 && b > 0) || (a > 0 && b < 0);
    }
  }
  </code></pre>
`;

//Given 2 ints, a and b and negative
//If negative and a and b are negative
//return true
//If one is negative and one is positive
//return true
//else return false

//Given 2 ints, a and b and negative
//If negative and a<0 and b <0
//return true
//Else if, a<0 and b >0
//return true
//Else if, a>0 and b<0
//return true
//Else
//return false

function posNeg(a, b, negative) {
  if (negative) {
    // If negative is true, return true if both are negative
    return a < 0 && b < 0;
  } else {
    // If negative is false, return true if one is negative and the other is positive
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
}

//Test cases
console.log(posNeg(1, -1, false)); //Expected output: true
console.log(posNeg(-1, 1, false)); //Expected output: true
console.log(posNeg(-1, 1, false)); //Expected output: true
console.log(posNeg(-4, -5, false)); //Expected output: false
console.log(posNeg(-4, 5, false)); //Expected output: true
console.log(posNeg(-4, 5, true)); //Expected output: false
console.log(posNeg(1, 1, false)); //Expected output: false
console.log(posNeg(-1, -1, false)); //Expected output: false
console.log(posNeg(1, -1, true)); //Expected output: false
console.log(posNeg(-1, 1, true)); //Expected output: false
console.log(posNeg(1, 1, true)); //Expected output: false
console.log(posNeg(-1, -1, true)); //Expected output: true
console.log(posNeg(5, -5, false)); //Expected output: true
console.log(posNeg(-6, 6, false)); //Expected output: true
console.log(posNeg(-5, -6, false)); //Expected output: false
console.log(posNeg(-2, -1, false)); //Expected output: false
console.log(posNeg(1, 2, false)); //Expected output: false
console.log(posNeg(-5, 6, true)); //Expected output: false
console.log(posNeg(-5, -5, true)); //Expected output: true
