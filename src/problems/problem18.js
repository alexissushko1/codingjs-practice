// src/problems/problem18.js
// Warmup-1  in1020 problem

// Problem Description
export const problemDescription = `
<h2>Problem: in1020</h2>
<p>Given 2 int values, return true if either of them is in the range 10..20 inclusive.</p>
<p>Example:</p>
<pre>
in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function in1020(a, b) {
    if (a >= 10 && a <= 20) {
      return true;
    } else if (b >= 10 && b <= 20) {
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;

//Given 2 int values (a, b)
//return true if either is in range 10-20 inclusive
//else return false

//Use logical and comparison operators to check range
//if a or b is >= 10 && <= 20, return true
//((10 <= a <= 20) || (10 <= b <= 20)) does not work
//to make range, needed && instead of ||

function in1020(a, b) {
  if (a >= 10 && a <= 20) {
    return true;
  } else if (b >= 10 && b <= 20) {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(in1020(12, 99)); //Expected output: true
console.log(in1020(21, 12)); //Expected output: true
console.log(in1020(8, 99)); //Expected output: false
console.log(in1020(99, 10)); //Expected output: true
console.log(in1020(20, 20)); //Expected output: true
console.log(in1020(21, 21)); //Expected output: false
console.log(in1020(9, 9)); //Expected output: false
