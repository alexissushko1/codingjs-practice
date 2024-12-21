// src/problems/problem20.js
// Warmup-1  loneTeen problem

// Problem Description
export const problemDescription = `
<h2>Problem: loneTeen</h2>
<p>We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.</p>
<p>Example:</p>
<pre>
loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false
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

//Teen if age 13-19 (inclusive)
//Given 2 ints (a, b), return true if either is teen, but not both
//if a is teen and b is not teen, return true
//else if, b is teen and a is not teen, return true
//else, return false

function loneTeen(a, b) {
  // Check if 'a' is a teen and 'b' is not, or if 'b' is a teen and 'a' is not
  if (a >= 13 && a <= 19 && !(b >= 13 && b <= 19)) {
    return true;
  } else if (b >= 13 && b <= 19 && !(a >= 13 && a <= 19)) {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(loneTeen(13, 99)); //Expected output: true
console.log(loneTeen(21, 19)); //Expected output: true
console.log(loneTeen(13, 13)); //Expected output: false
console.log(loneTeen(14, 20)); //Expected output: true
console.log(loneTeen(20, 15)); //Expected output: true
console.log(loneTeen(16, 17)); //Expected output: false
console.log(loneTeen(16, 9)); //Expected output: true
console.log(loneTeen(16, 18)); //Expected output: false
console.log(loneTeen(13, 20)); //Expected output: true
console.log(loneTeen(6, 18)); //Expected output: true
console.log(loneTeen(99, 13)); //Expected output: true
console.log(loneTeen(99, 99)); //Expected output: false
