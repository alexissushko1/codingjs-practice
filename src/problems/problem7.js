// src/problems/problem7.js
// Warmup-1  nearHundred problem

// Problem Description
export const problemDescription = `
  <h2>Problem: nearHundred</h2>
  <p>Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.</p>
  <p>Example:</p>
  <pre>
  nearHundred(93) → true
  nearHundred(90) → true
  nearHundred(89) → false
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function nearHundred (n) {
    if (Math.abs(n-100) <= 10) {
      return true;
    } else if (Math.abs(n-200) <= 10) {
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;

//Function with parameter n
//If within 10 of 100
//return true
//If within 10 of 200
//return true
//else return false

//if n's absolute value is < = 10 of 100
// return true
//if n's absolute value is < = 10 of 200
// return true
// else
//return false

function nearHundred(n) {
  if (Math.abs(n - 100) <= 10) {
    return true;
  } else if (Math.abs(n - 200) <= 10) {
    return true;
  } else {
    return false;
  }
}

//Test cases
console.log(nearHundred(93)); // Expected: true
console.log(nearHundred(90)); // Expected: true
console.log(nearHundred(89)); // Expected: false
console.log(nearHundred(110)); // Expected: true
console.log(nearHundred(111)); // Expected: false
console.log(nearHundred(121)); // Expected: false
console.log(nearHundred(0)); // Expected: false
console.log(nearHundred(5)); // Expected: false
console.log(nearHundred(191)); // Expected: true
console.log(nearHundred(189)); // Expected: false
