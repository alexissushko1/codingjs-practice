// src/problems/problem11.js
// Warmup-1  front3 problem

// Problem Description
export const problemDescription = `
<h2>Problem: front3</h2>
<p>Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.</p>
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
