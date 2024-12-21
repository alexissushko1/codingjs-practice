// src/problems/problem31.js
// Warmup-1  everyNth problem

// Problem Description
export const problemDescription = `
<h2>Problem: everyNth</h2>
<p>Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.</p>
<p>Example:</p>
<pre>
everyNth('Miracle', 2) → Mrce
everyNth('abcdefg', 2) → aceg
everyNth('abcdefg', 3) → adg
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function everyNth(str, n) {
    let nVar = "";
    for (let i = 0; i < str.length; i++) {
      if (i % n === 0) {
        nVar += str[i];
      }
    }
    return nVar;
  }
  </code></pre>
`;

//Given non empty string and n,\
//assign nVar
//loop through str
//for every n of str, log it
//return str[0] +

function everyNth(str, n) {
  let nVar = "";
  for (let i = 0; i < str.length; i++) {
    if (i % n === 0) {
      nVar += str[i];
    }
  }
  return nVar;
}

//Test cases

console.log(everyNth("Miracle", 2)); //Expected output: Mrce
console.log(everyNth("abcdefg", 2)); //Expected output: aceg
console.log(everyNth("abcdefg", 3)); //Expected output: adg
console.log(everyNth("Chocolate", 3)); //Expected output: Cca
console.log(everyNth("Chocolates", 3)); //Expected output: Ccas
console.log(everyNth("Chocolates", 4)); //Expected output: Coe
console.log(everyNth("Chocolates", 100)); //Expected output: C
