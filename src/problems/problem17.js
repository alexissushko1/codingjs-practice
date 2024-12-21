// src/problems/problem17.js
// Warmup-1  icyHot problem

// Problem Description
export const problemDescription = `
<h2>Problem: icyHot</h2>
<p>Given two temperatures, return true if one is less than 0 and the other is greater than 100.</p>
<p>Example:</p>
<pre>
icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function icyHot(temp1, temp2) {
    if (temp1 < 0 && temp2 > 100) {
      return true;
    } else if (temp1 > 0 && temp2 < 100) {
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;

//Given two temperatures,
//if one temperatures is less than 0 and
//the other is greater than 100, return true
//else, return false

// use && to assess both conditions
// || did not work. Try else if statements for conditions reversed

function icyHot(temp1, temp2) {
  if (temp1 < 0 && temp2 > 100) {
    return true;
  } else if (temp1 > 0 && temp2 < 100) {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(icyHot(120, -1)); //Expected output: true
console.log(icyHot(-1, 120)); //Expected output: true
console.log(icyHot(2, 120)); //Expected output: false
console.log(icyHot(-1, 100)); //Expected output: false
console.log(icyHot(-2, 120)); //Expected output: true
console.log(icyHot(120, 120)); //Expected output: false
