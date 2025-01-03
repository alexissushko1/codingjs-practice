// src/problems/problem6.js
// Warmup-2  stringSplosion problem

// Problem Description
export const problemDescription = `
  <h2>Problem: stringSplosion</h2>
  <p>Given a non-empty string like "Code" return a string like "CCoCodCode"</p>
  <p>Example:</p>
  <pre>
  No example provided
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function stringSplosion(str) {
    let wordSection = "";
    for (let i = 0; i < str.length; i++) {
      wordSection += str.slice(0, i + 1);
    }
    return wordSection;
  }
  </code></pre>
`;

//Given non empty string,
//Loop through string,
//Print str[i]
//Print str[i] + str[i+1] + str[i+1+2]
//Repeat until entire str shows

//Function that takes str as parameter,
//Initialize empty string to store result
//Loop through the string and for each loop
//append the slice of the str from 0 to the index+1
//Return the wordSection variable

function stringSplosion(str) {
  let wordSection = "";
  for (let i = 0; i < str.length; i++) {
    wordSection += str.slice(0, i + 1);
  }
  return wordSection;
}

//Test cases
console.log(stringSplosion("hello")); // Output: hhehelhellhello
