// src/problems/problem21.js
// Warmup-1  delDel problem

// Problem Description
export const problemDescription = `
<h2>Problem: delDel</h2>
<p>Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.</p>
<p>Example:</p>
<pre>
delDel('adelbc') → abc
delDel('adelHello') → aHello
delDel('abcdel') → abcdel
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function delDel(str) {
    if (str.length < 4) {
      return str;
    } else if (str.slice(1, 4) === "del") {
      return str.slice(0, 1) + str.slice(4);
    } else {
      return str;
    }
  } 
  </code></pre>
`;

//Given a string,
//if string "del" appears starting at index 1
//return a string where that del has been deleted
//else, return string unchanged

function delDel(str) {
  if (str.length < 4) {
    return str;
  } else if (str.slice(1, 4) === "del") {
    return str.slice(0, 1) + str.slice(4);
  } else {
    return str;
  }
}

//Test cases

console.log(delDel("adelbc")); //Expected output: abc
console.log(delDel("adelHello")); //Expected output: aHello
console.log(delDel("abcdel")); //Expected output: abcdel
console.log(delDel("add")); //Expected output: add
console.log(delDel("ad")); //Expected output: ad
console.log(delDel("a")); //Expected output: a
console.log(delDel("")); //Expected output:
console.log(delDel("del")); //Expected output: del
console.log(delDel("adel")); //Expected output: a
console.log(delDel("addelbb")); //Expected output: aadelbb
