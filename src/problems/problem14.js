// src/problems/problem14.js
// Warmup-1  or35 problem

// Problem Description
export const problemDescription = `
<h2>Problem: or35</h2>
<p>Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)</p>
<p>Example:</p>
<pre>
or35(3) → true
or35(10) → true
or35(8) → false
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function or35(n) {
    if (n % 3 === 0) {
      return true;
    } else if (n % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;

//Return true if nonnegative numbers if multiple of 3 or 5
//if , else if statement
// if multiple of 3, return true
//else if multiple of 5, return true
//else return false

// 1 false 2 false 3 true 4 false 5 true 6 true

function or35(n) {
  if (n % 3 === 0) {
    return true;
  } else if (n % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(or35(3)); //Expected output: true
console.log(or35(10)); //Expected output: true
console.log(or35(8)); //Expected output: false
console.log(or35(15)); //Expected output: true
console.log(or35(5)); //Expected output: true
console.log(or35(4)); //Expected output: false
console.log(or35(7)); //Expected output: false
console.log(or35(6)); //Expected output: true
console.log(or35(17)); //Expected output: false
console.log(or35(18)); //Expected output: true
console.log(or35(29)); //Expected output: false
console.log(or35(20)); //Expected output: true
console.log(or35(21)); //Expected output: true
console.log(or35(22)); //Expected output: false
console.log(or35(45)); //Expected output: true
console.log(or35(99)); //Expected output: true
console.log(or35(100)); //Expected output: true
console.log(or35(101)); //Expected output: false
console.log(or35(121)); //Expected output: false
console.log(or35(122)); //Expected output: false
console.log(or35(123)); //Expected output: true
