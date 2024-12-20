// src/problems/problem12.js
// Warmup-1  front3 problem

// Problem Description
export const problemDescription = `
<h2>Problem: front3</h2>
<p>Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.</p>
<p>Example:</p>
<pre>
front3('Java') → JavJavJav
front3('Chocolate') → ChoChoCho
front3('abc') → abcabcabc
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function front3(str) {
    let front = str.slice(0, 3);
    if (str.length < 3) {
      return str + str + str;
    } else {
      return front + front + front;
    }
  }
  </code></pre>
`;

//Given str,
//front is first 3 chars of str
//if str.length < 3,
//return str
// else,
// return front + front + front

function front3(str) {
  let front = str.slice(0, 3);
  if (str.length < 3) {
    return str + str + str;
  } else {
    return front + front + front;
  }
}

//Test cases

console.log(front3("Java")); //Expected output: JavJavJav
console.log(front3("Chocolate")); //Expected output: ChoChoCho
console.log(front3("abc")); //Expected output: abcabcabc
console.log(front3("abcXYZ")); //Expected output: abcabcabc
console.log(front3("ab")); //Expected output: ababab
console.log(front3("a")); //Expected output: aaa
console.log(front3("")); //Expected output: JavJavJav
