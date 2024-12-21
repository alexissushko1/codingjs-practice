// src/problems/problem19.js
// Warmup-1  hasTeen problem

// Problem Description
export const problemDescription = `
<h2>Problem: hasTeen</h2>
<p>We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.</p>
<p>Example:</p>
<pre>
hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function hasTeen(a, b, c) {
    if (a >= 13 && a <= 19) {
      return true;
    } else if (b >= 13 && b <= 19) {
      return true;
    } else if (c >= 13 && c <= 19) {
      return true;
    } else {
      return false;
    }
  }  
  </code></pre>
`;

// teen is in range of 13-19 (incluseive)
//Given 3 int values (a,b,c),
//Return true if one or more are teen

//Use if, else if statements.
//check if a is teen, return true
//else if a isn't teen, check if b is teen, return true
//else if a and b aren't teen, check if c is teen
//If c is teen, return true
//else, return false

function hasTeen(a, b, c) {
  if (a >= 13 && a <= 19) {
    return true;
  } else if (b >= 13 && b <= 19) {
    return true;
  } else if (c >= 13 && c <= 19) {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(hasTeen(13, 20, 10)); //Expected output: true
console.log(hasTeen(20, 19, 10)); //Expected output: true
console.log(hasTeen(20, 10, 13)); //Expected output: true
console.log(hasTeen(1, 20, 12)); //Expected output: false
console.log(hasTeen(19, 20, 12)); //Expected output: true
console.log(hasTeen(12, 20, 19)); //Expected output: true
console.log(hasTeen(12, 9, 20)); //Expected output: false
console.log(hasTeen(12, 18, 20)); //Expected output: true
console.log(hasTeen(14, 2, 20)); //Expected output: true
console.log(hasTeen(4, 2, 20)); //Expected output: false
console.log(hasTeen(11, 22, 22)); //Expected output: false
