// src/problems/problem2b.js
// Warmup-1  frontTimes problem

// Problem Description
export const problemDescription = `
<h2>Problem: frontTimes</h2>
<p>Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.</p>
<p>Example:</p>
<pre>
frontTimes('Chocolate', 2) → ChoCho
frontTimes('Chocolate', 3) → ChoChoCho
frontTimes('Abc', 3) → AbcAbcAbc
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function frontTimes(str, n) {
    let frontOfString = str.slice(0, 3);
    if (str.length < 3) {
      return str.repeat(n);
    } else {
      return frontOfString.repeat(n);
    }
  }
  </code></pre>
`;

// Given a str and positive int n,
//If str has less than 3 char, return string n times
//Otherwise,
//Front of string is first 3 chars
//Return front of string n times

//Function with parameters str and n
//if str < 3, repeat str n times
// else
//let frontOfString = str.slice(0,2)

function frontTimes(str, n) {
  let frontOfString = str.slice(0, 3);
  if (str.length < 3) {
    return str.repeat(n);
  } else {
    return frontOfString.repeat(n);
  }
}

//Test cases

console.log(frontTimes("Chocolate", 2)); //Expected output: ChoCho
console.log(frontTimes("Chocolate", 3)); //Expected output: ChoChoCho
console.log(frontTimes("Abc", 3)); //Expected output: AbcAbcAbc
console.log(frontTimes("Ab", 4)); //Expected output: AbAbAbAb
console.log(frontTimes("A", 4)); //Expected output: AAAA
console.log(frontTimes("", 4)); //Expected output:
console.log(frontTimes("Abc", 0)); //Expected output:
