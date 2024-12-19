// src/problems/problem3.js
// Warmup-1  sumDouble problem

// Problem Description
export const problemDescription = `
  <h2>Problem: sumDouble</h2>
  <p>Given two int values, return their sum. Unless the two values are the same, then return double their sum.</p>
  <p>Example:</p>
  <pre>
  sumDouble(1, 2) → 3
  sumDouble(3, 2) → 5
  sumDouble(2, 2) → 8
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function sumDouble(a, b) {
    if(a===b) {
      return (a+b)*2;
    } else {
      return a+b;
    }
  </code></pre>
`;

//Function has parameters of a and b
//Look at a and compare it to b, if they are the same
//I should return double their sum
//When looking at and comparing to b,
//if they are not the same, return their sum

//function sumDouble (a, b) {
// if a === b ,
// return (a+b)*2;
// else
//return (a+b)

function sumDouble(a, b) {
  if (a === b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
}

//Test cases
console.log(sumDouble(1, 2)); // Expected: 3
console.log(sumDouble(3, 2)); // Expected: 5
console.log(sumDouble(2, 2)); // Expected: 8
console.log(sumDouble(-1, 0)); // Expected: -1
console.log(sumDouble(3, 3)); // Expected: 12
console.log(sumDouble(0, 0)); // Expected: 0
console.log(sumDouble(0, 1)); // Expected: 1
console.log(sumDouble(3, 4)); // Expected: 7
