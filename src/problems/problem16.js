// src/problems/problem16.js
// Warmup-1  startHi problem

// Problem Description
export const problemDescription = `
<h2>Problem: startHi</h2>
<p>Given a string, return true if the string starts with 'hi'and false otherwise.</p>
<p>Example:</p>
<pre>
startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function startHi(str) {
    const startStr = str.slice(0, 2);
    if (startStr === "hi") {
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;

//Given a string
//return true if string starts with hi
//else return false

//get first 2 chars with slice
//if str[0,1] equals hi, return true
//else, return false

function startHi(str) {
  const startStr = str.slice(0, 2);
  if (startStr === "hi") {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(startHi("hi there")); //Expected output: true
console.log(startHi("hi")); //Expected output: true
console.log(startHi("hello hi")); //Expected output: false
console.log(startHi("he")); //Expected output: false
console.log(startHi("h")); //Expected output: false
console.log(startHi("")); //Expected output: false
console.log(startHi("ho hi")); //Expected output: false
console.log(startHi("hi ho")); //Expected output: true
