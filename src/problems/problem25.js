// src/problems/problem25.js
// Warmup-1  close10 problem

// Problem Description
export const problemDescription = `
<h2>Problem: close10</h2>
<p>Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.</p>
<p>Example:</p>
<pre>
close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function close10(a, b) {
    if (Math.abs(10 - a) < Math.abs(10 - b)) {
      return a;
    } else if (Math.abs(10 - b) < Math.abs(10 - a)) {
      return b;
    } else {
      return 0;
    }
  }
  </code></pre>
`;

function close10(a, b) {
  if (Math.abs(10 - a) < Math.abs(10 - b)) {
    return a;
  } else if (Math.abs(10 - b) < Math.abs(10 - a)) {
    return b;
  } else {
    return 0;
  }
}

//Test cases

console.log(close10(8, 13)); //Expected output: 8
console.log(close10(13, 8)); //Expected output: 8
console.log(close10(13, 7)); //Expected output: 0
console.log(close10(7, 13)); //Expected output: 0
console.log(close10(9, 13)); //Expected output: 9
console.log(close10(13, 8)); //Expected output: 8
console.log(close10(10, 12)); //Expected output: 10
console.log(close10(11, 10)); //Expected output: 10
console.log(close10(5, 21)); //Expected output: 5
console.log(close10(0, 20)); //Expected output: 0
console.log(close10(10, 10)); //Expected output: 0
