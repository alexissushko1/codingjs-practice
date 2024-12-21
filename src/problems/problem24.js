// src/problems/problem24.js
// Warmup-1  intMax problem

// Problem Description
export const problemDescription = `
<h2>Problem: intMax</h2>
<p>Given three int values, a b c, return the largest.</p>
<p>Example:</p>
<pre>
intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function intMax(a, b, c) {
    if (a > b && a > c) {
      return a;
    } else if (b > (a && c)) {
      return b;
    } else if (c > (a && b)) {
      return c;
    }
  }
  </code></pre>
`;

//Given three int values, abc return the largest
//if else to check each int

function intMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > (a && c)) {
    return b;
  } else if (c > (a && b)) {
    return c;
  }
}

//Test cases

console.log(intMax(1, 2, 3)); //Expected output: 3
console.log(intMax(1, 3, 2)); //Expected output: 3
console.log(intMax(3, 2, 1)); //Expected output: 3
console.log(intMax(9, 3, 3)); //Expected output: 9
console.log(intMax(3, 9, 3)); //Expected output: 9
console.log(intMax(3, 3, 9)); //Expected output: 9
console.log(intMax(8, 2, 3)); //Expected output: 8
console.log(intMax(-3, -1, -2)); //Expected output: -1
console.log(intMax(6, 2, 5)); //Expected output: 6
console.log(intMax(5, 6, 2)); //Expected output: 6
console.log(intMax(5, 2, 6)); //Expected output: 6
