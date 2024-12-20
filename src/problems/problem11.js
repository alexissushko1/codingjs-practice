// src/problems/problem11.js
// Warmup-1  frontBack problem

// Problem Description
export const problemDescription = `
<h2>Problem: frontBack</h2>
<p>Given a string, return a new string where the first and last chars have been exchanged.</p>
<p>Example:</p>
<pre>
frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → b
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function frontBack(str) {
    if (str.length === 1) {
      return str;
    } else {
      return (
        str.charAt(str.length - 1) + str.slice(1, str.length - 1) + str.charAt(0)
      );
    }
  }
  </code></pre>
`;

//Given str,
//Return new str where fist char is at end of str and
//last char is at beginning

// function that take str as parameter
// return charAt str.length - 1+ str.charAt(1, str.length-1)

function frontBack(str) {
  if (str.length === 1) {
    return str;
  } else {
    return (
      str.charAt(str.length - 1) + str.slice(1, str.length - 1) + str.charAt(0)
    );
  }
}

//Test cases

console.log(frontBack("code")); //Expected output: eodc
console.log(frontBack("a")); //Expected output: a
console.log(frontBack("ab")); //Expected output: ba
console.log(frontBack("abc")); //Expected output: cba
console.log(frontBack("")); //Expected output:
console.log(frontBack("Chocolate")); //Expected output: ehocolatC
console.log(frontBack("aavj")); //Expected output: java
console.log(frontBack("hello")); //Expected output: oellh
