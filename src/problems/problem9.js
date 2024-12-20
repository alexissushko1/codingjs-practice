// src/problems/problem9.js
// Warmup-1  notString problem

// Problem Description
export const problemDescription = `
<h2>Problem: notString</h2>
<p>Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.</p>
<p>Example:</p>
<pre>
notString('candy') → not candy
notString('x') → not x
notString('not bad') → not bad
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function notString(str) {
    if (str[0] === "n" && str[1] === "o" && str[2] === "t") {
      return str;
    } else {
      return "not " + str;
    }
  }
  </code></pre>
`;

//Given string, return string with "not" added to front
//If string already has "not" at beginning, return string

//If string begins with "not", return string
//Else, return "not" concatentated with string

//Function that takes str as parameter
//If str[0] === "n" and str[1] === "o" and str[2] === "t"
//return str
//Else return "not" + str

function notString(str) {
  if (str[0] === "n" && str[1] === "o" && str[2] === "t") {
    return str;
  } else {
    return "not " + str;
  }
}

//Test cases

console.log(notString("candy")); //Expected output: not candy
console.log(notString("x")); //Expected output: not x
console.log(notString("not bad")); //Expected output: not bad
console.log(notString("bad")); //Expected output: not bad
console.log(notString("not")); //Expected output: not
console.log(notString("is not")); //Expected output: not is not
console.log(notString("no")); //Expected output: not no
