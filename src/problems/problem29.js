// src/problems/problem29.js
// Warmup-1  lastDigit problem

// Problem Description
export const problemDescription = `
<h2>Problem: lastDigit</h2>
<p>Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.</p>
<p>Example:</p>
<pre>
lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function lastDigit(a, b, c) {
    if (a % 10 === b % 10) {
      return true;
    } else if (a % 10 === c % 10) {
      return true;
    } else if (b % 10 === c % 10) {
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;
//Given 2 non negative ints,
//if last num of a = last num of b OR last num of c
//return true
//else if last of b = last of c
//return true
//else return false

//mod operator - a % 10 = b% 10

function lastDigit(a, b, c) {
  if (a % 10 === b % 10) {
    return true;
  } else if (a % 10 === c % 10) {
    return true;
  } else if (b % 10 === c % 10) {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(lastDigit(7, 17)); //Expected output: true
console.log(lastDigit(6, 17)); //Expected output: false
console.log(lastDigit(3, 113)); //Expected output: true
console.log(lastDigit(114, 113)); //Expected output: false
console.log(lastDigit(114, 4)); //Expected output: true
console.log(lastDigit(10, 0)); //Expected output: true
console.log(lastDigit(11, 0)); //Expected output: false
