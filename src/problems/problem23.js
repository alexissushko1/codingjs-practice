// src/problems/problem23.js
// Warmup-1  startOz problem

// Problem Description
export const problemDescription = `
<h2>Problem: startOz</h2>
<p>Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.</p>
<p>Example:</p>
<pre>
startOz('ozymandias') → oz
startOz('bzoo') → z
startOz('oxx') → o
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function startOz(str) {
    const char = str.slice(0, 2);
    if (str[0] !== "o" && str[1] === "z") {
      return str[1];
    } else if (str[0] === "o" && str[1] !== "z") {
      return str[0];
    } else if (str[0] === "o" && str[1] === "z") {
      return str[0] + str[1];
    } else if (str[0] !== "o" && str[1] !== "z") {
      return "";
    }
  }
  </code></pre>
`;

//Given a string
//return string made of first 2 chars (if present)
//however, inlude first char only if it 'o' and
//include second only if it is 'z'
//ozymandias yields oz

//get first 2 characters
//return str, but if 1st char isn't o, only display 2nd character
//if 2nd char isn't z, only display 1st char
//if 1st char isn't o, and 2nd char isn't z, don't return

function startOz(str) {
  const char = str.slice(0, 2);
  if (str[0] !== "o" && str[1] === "z") {
    return str[1];
  } else if (str[0] === "o" && str[1] !== "z") {
    return str[0];
  } else if (str[0] === "o" && str[1] === "z") {
    return str[0] + str[1];
  } else if (str[0] !== "o" && str[1] !== "z") {
    return "";
  }
}

//Test cases

console.log(startOz("ozymandias")); //Expected output: oz
console.log(startOz("bzoo")); //Expected output: z
console.log(startOz("oxx")); //Expected output: o
console.log(startOz("ounce")); //Expected output: o
console.log(startOz("o")); //Expected output: o
console.log(startOz("abc")); //Expected output:
console.log(startOz("")); //Expected output:
console.log(startOz("zoo")); //Expected output:
console.log(startOz("aztec")); //Expected output: z
console.log(startOz("zzzz")); //Expected output: z
console.log(startOz("oznic")); //Expected output: oz
