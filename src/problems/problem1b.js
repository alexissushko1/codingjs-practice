// src/problems/problem1b.js
// Warmup-1  stringTimes problem

// Problem Description
export const problemDescription = `
<h2>Problem: stringTimes</h2>
<p>Given a string and a non-negative int n, return a larger string that is n copies of the original string.</p>
<p>Example:</p>
<pre>
stringTimes('Hi', 2) → HiHi
stringTimes('Hi', 3) → HiHiHi
stringTimes('Hi', 1) → Hi
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function stringTimes(str, n) {
    return str.repeat(n);
  }
  </code></pre>
`;

//Given string and positive n,
//Return a new string that is n copies
//Look str,
//If n is 1, print str 1 time
//If n is 2, print str 2 times

function stringTimes(str, n) {
  return str.repeat(n);
}

//Test cases

console.log(stringTimes("Hi", 2)); //Expected output: HiHi
console.log(stringTimes("Hi", 3)); //Expected output: HiHiHi
console.log(stringTimes("Hi", 1)); //Expected output: Hi
console.log(stringTimes("Hi", 0)); //Expected output:
console.log(stringTimes("Oh Boy!", 2)); //Expected output: Oh Boy!Oh Boy!
console.log(stringTimes("x", 4)); //Expected output: xxxx
console.log(stringTimes("", 4)); //Expected output:
console.log(stringTimes("code", 2)); //Expected output: codecode
console.log(stringTimes("code", 3)); //Expected output: codecodecode
