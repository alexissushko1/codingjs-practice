// src/problems/problem27.js
// Warmup-1  max1020 problem

// Problem Description
export const problemDescription = `
<h2>Problem: max1020</h2>
<p>Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.</p>
<p>Example:</p>
<pre>
max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function max1020(a, b) {
    if (!(a >= 10 && a <= 20) && !(b >= 10 && b <= 20)) {
      return 0;
    } else if (a > b && a >= 10 && a <= 20) {
      return a;
    } else if (a > b && !(a >= 10 && a <= 20)) {
      return b;
    } else if (b > a && b >= 10 && b <= 20) {
      return b;
    } else if (b > a && !(b >= 10 && b <= 20)) {
      return a;
    }
  }
  </code></pre>
`;

function max1020(a, b) {
  if (!(a >= 10 && a <= 20) && !(b >= 10 && b <= 20)) {
    return 0;
  } else if (a > b && a >= 10 && a <= 20) {
    return a;
  } else if (a > b && !(a >= 10 && a <= 20)) {
    return b;
  } else if (b > a && b >= 10 && b <= 20) {
    return b;
  } else if (b > a && !(b >= 10 && b <= 20)) {
    return a;
  }
}

//Test cases

console.log(max1020(11, 19)); //Expected output: 19
console.log(max1020(19, 11)); //Expected output: 19
console.log(max1020(11, 9)); //Expected output: 11
console.log(max1020(9, 21)); //Expected output: 0
console.log(max1020(10, 21)); //Expected output: 10
console.log(max1020(21, 10)); //Expected output: 10
console.log(max1020(9, 11)); //Expected output: 11
console.log(max1020(23, 10)); //Expected output: 10
console.log(max1020(20, 10)); //Expected output: 20
console.log(max1020(7, 20)); //Expected output: 20
console.log(max1020(17, 16)); //Expected output: 17
