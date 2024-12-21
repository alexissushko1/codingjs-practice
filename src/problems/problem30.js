// src/problems/problem30.js
// Warmup-1  endUp problem

// Problem Description
export const problemDescription = `
<h2>Problem: endUp</h2>
<p>Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.</p>
<p>Example:</p>
<pre>
endUp('Hello') → HeLLO
endUp('hi there') → hi thERE
endUp('hi') → HI
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function endUp(str){
    if (str.length < 3) {
      return str.toUpperCase();
    } else {
      let front = str.slice(0,str.length - 3);
      let back = str[str.length - 3] + str[str.length - 2] + str[str.length - 1];
      return front + back.toUpperCase();
  }
  </code></pre>
`;

//Given str,
// if str.length < 3, return str.upper
//else, return str where str[0] str[1] and str[2] are uppercase

function endUp(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    let front = str.slice(0, str.length - 3);
    let back = str[str.length - 3] + str[str.length - 2] + str[str.length - 1];
    return front + back.toUpperCase();
  }
}

//Test cases

console.log(endUp("Hello")); //Expected output: HeLLO
console.log(endUp("hi there")); //Expected output: hi thERE
console.log(endUp("hi")); //Expected output: HI
console.log(endUp("woo hoo")); //Expected output: woo HOO
console.log(endUp("xyz12")); //Expected output: xyZ12
console.log(endUp("x")); //Expected output: X
console.log(endUp("")); //Expected output:
