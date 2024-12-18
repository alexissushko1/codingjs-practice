// src/problems/problem4.js
// Warmup-1  diff21 problem

// Problem Description
export const problemDescription = `
  <h2>Problem: diff21</h2>
  <p>Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.</p>
  <p>Example:</p>
  <pre>
  diff21(19) → 2
  diff21(10) → 11
  diff21(21) → 0
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function diff21(n) {
    if(n>21) {
      return Math.abs(n-21) * 2;
    } else {
      return Math.abs(n-21);
    }
  }
  </code></pre>
`;

// Function that takes the paramater of n
// if n is greater than 21, return double the absolute difference of n and 21
// otherwise, return the absolute difference between n and 21

//Look at n, if n is larger than 21, take absolute difference of n and 21 * 2
//else take absolute difference between n and 21

//function diff21 (n) {
//if n is greater than 21
// return 2 * |n-21|
//else return
// |n-21|

function diff21(n) {
  if (n > 21) {
    return Math.abs(n - 21) * 2;
  } else {
    return Math.abs(n - 21);
  }
}

//Test cases
console.log(diff21(19)); // Expected: 2
console.log(diff21(10)); // Expected: 11
console.log(diff21(21)); // Expected: 0
console.log(diff21(22)); // Expected: 2
console.log(diff21(25)); // Expected: 8
console.log(diff21(30)); // Expected: 18
console.log(diff21(0)); // Expected: 21
console.log(diff21(1)); // Expected: 20
console.log(diff21(2)); // Expected: 19
console.log(diff21(-1)); // Expected: 22
console.log(diff21(-2)); // Expected: 23
console.log(diff21(50)); // Expected: 58
