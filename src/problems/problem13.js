// src/problems/problem13.js
// Warmup-1  backAround problem

// Problem Description
export const problemDescription = `
<h2>Problem: backAround</h2>
<p>Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.</p>
<p>Example:</p>
<pre>
backAround('cat') → tcatt
backAround('Hello') → oHelloo
backAround('a') → aaa
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function backAround(str) {
    const lastChar = str.slice(-1);
    const newString = lastChar + str + lastChar;
    return newString;
  }
  </code></pre>
`;

//Given string (input), take last char
//Return new string with last char added at the front and back
//Original string is length 1 or more

//Get last character, string -1
//New string with concatenated strings
//New string with lastChar added to front and back

function backAround(str) {
  const lastChar = str.slice(-1);
  const newString = lastChar + str + lastChar;
  return newString;
}

//Test cases

console.log(backAround("cat")); //Expected output: tcatt
console.log(backAround("Hello")); //Expected output: oHelloo
console.log(backAround("a")); //Expected output: aaa
console.log(backAround("abc")); //Expected output: cabcc
console.log(backAround("read")); //Expected output: dreadd
console.log(backAround("boo")); //Expected output: obooo
