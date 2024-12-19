// src/problems/problem6.js
// Warmup-1  makes10 problem

// Problem Description
export const problemDescription = `
  <h2>Problem: makes10</h2>
  <p>Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10</p>
  <p>Example:</p>
  <pre>
  makes10(9, 10) → true
  makes10(9, 9) → false
  makes10(1, 9) → true
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function makes10(a, b) {
    if (a === 10 || b === 10) {
      return true;
    } else if (a + b === 10) {
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;

//Given a and b,
//return true if one of them is 10 OR
//if their sum is 10

//Given a and b as parameters,
//Check if a is 10
//If so, return true
//Check if b is 10
//If so, return true
//Check if a+b=10,
//If so, return true
//Else, return falsee

//function(a,b) {
//if a is 10
//return true
//else if b is 10
//return true
//else if a+b=10,
//return true
//else,
//return false

//function(a,b) {
// if a is 10 or b is 10
//return true
//else if a+b=10
//return true
//else
//return false

function makes10(a, b) {
  if (a === 10 || b === 10) {
    return true;
  } else if (a + b === 10) {
    return true;
  } else {
    return false;
  }
}

//Test cases
console.log(makes10(9, 10)); // Expected: true
console.log(makes10(9, 9)); // Expected: false
console.log(makes10(1, 9)); // Expected: true
console.log(makes10(10, 1)); // Expected: true
console.log(makes10(10, 10)); // Expected: true
console.log(makes10(8, 2)); // Expected: true
console.log(makes10(8, 3)); // Expected: false
console.log(makes10(10, 42)); // Expected: true
console.log(makes10(12, -2)); // Expected: true
