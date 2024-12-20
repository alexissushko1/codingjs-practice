// src/problems/problem10.js
// Warmup-1  missingChar problem

// Problem Description
export const problemDescription = `
<h2>Problem: missingChar</h2>
<p>Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive)</p>
<p>Example:</p>
<pre>
missingChar('kitten', 1) → ktten
missingChar('kitten', 0) → itten
missingChar('kitten', 4) → kittn
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function missingChar(str, n) {
    return str.slice(0, n) + str.slice(n + 1, str.length);
  }
  </code></pre>
`;

//Given non empty string and int n,
//Return string where charAt(n) is removed
//n will be between 0 to str.length()-1

//function that takes str and n as parameters
//return str slice from 0-n + str.slice from n to str.length - 1

function missingChar(str, n) {
  return str.slice(0, n) + str.slice(n + 1, str.length);
}

//Test cases

console.log(missingChar("kitten", 1)); //Expected output: ktten
console.log(missingChar("kitten", 0)); //Expected output: itten
console.log(missingChar("kitten", 4)); //Expected output: kittn
console.log(missingChar("Hi", 0)); //Expected output: i
console.log(missingChar("Hi", 1)); //Expected output: H
console.log(missingChar("code", 0)); //Expected output: ode
console.log(missingChar("code", 1)); //Expected output: cde
console.log(missingChar("code", 2)); //Expected output: coe
console.log(missingChar("code", 3)); //Expected output: cod
console.log(missingChar("chocolate", 8)); //Expected output: chocolat
