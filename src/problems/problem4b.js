// src/problems/problem4.js
// Warmup-2  doubleX problem

// Problem Description
export const problemDescription = `
  <h2>Problem: doubleX</h2>
  <p>Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".</p>
  <p>Example:</p>
  <pre>
  doubleX('axxbb') → true
  doubleX('axaxax') → false
  doubleX('xxxxx') → true  
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function doubleX(str) {
    // Find the first "x" and check if the next character is also "x"
    const index = str.indexOf("x"); // Get the first occurrence of "x"
    return index !== -1 && str[index + 1] === "x"; // Check if "x" follows the first "x"
  }
  </code></pre>
`;

//Given a string,
//The first time an "x" is in the string
//If an "x" follows that first "x", return true
//Else, return false

//function doubleX(str) {
//loop through the characters in the str
//Once "x" is found stop
//Check if "x" is after the first "x"
// If so, return true
// Else, return false

/*
function doubleX(str){
  if (str.length < 1) {
    return false;
  } 
  
  for (let i = 0; i < str.length; i++) {
     else if (str[i] !== "x" && str[i + 1] !== "x") {
      return false;
    } else if (str[i] === "x") {
      if (str[i + 1] === "x") {
        return true;
      } else {
        return false;
      }
  }
}

*/

//Use indexOf for cleaner code and get the first occurrence of "x'

function doubleX(str) {
  // Find the first "x" and check if the next character is also "x"
  const index = str.indexOf("x"); // Get the first occurrence of "x"
  return index !== -1 && str[index + 1] === "x"; // Check if "x" follows the first "x"
}

//Test cases
console.log(doubleX("axxbb")); // Expected: true
console.log(doubleX("axaxax")); // Expected: false
console.log(doubleX("xxxxx")); // Expected: true
console.log(doubleX("xaxxx")); // Expected: false
console.log(doubleX("aaaax")); // Expected: false
console.log(doubleX("")); // Expected: false
console.log(doubleX("abc")); // Expected: false
console.log(doubleX("x")); // Expected: false
console.log(doubleX("xx")); // Expected: true
console.log(doubleX("xaxx")); // Expected: false
