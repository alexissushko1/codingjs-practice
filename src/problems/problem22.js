// src/problems/problem22.js
// Warmup-1  mixStart problem

// Problem Description
export const problemDescription = `
<h2>Problem: mixStart</h2>
<p>Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.</p>
<p>Example:</p>
<pre>
mixStart('mix snacks') → true
mixStart('pix snacks') → true
mixStart('piz snacks') → false
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function mixStart(str) {
    const char = str[1] + str[2];
    if (char === "ix") {
      return true;
    } else {
      return false;
    }
  } 
  </code></pre>
`;

//return true if given string begins with mix,
//except the m can be anything so 'pix', '9ix', etc.

//if else statement
//use slice for 2nd and 3rd letters
//else, return false

//str.slice(1,

function mixStart(str) {
  const char = str[1] + str[2];
  if (char === "ix") {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(mixStart("mix snacks")); //Expected output: true
console.log(mixStart("pix snacks")); //Expected output: true
console.log(mixStart("piz snacks")); //Expected output: false
console.log(mixStart("nix")); //Expected output: true
console.log(mixStart("ni")); //Expected output: false
console.log(mixStart("n")); //Expected output: false
