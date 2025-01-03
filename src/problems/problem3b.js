// src/problems/problem3.js
// Warmup-2  countXX problem

// Problem Description
export const problemDescription = `
  <h2>Problem: countXX</h2>
  <p>Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.</p>
  <p>Example:</p>
  <pre>
  countXX('abcxx') → 1
  countXX('xxx') → 2
  countXX('xxxx') → 3
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function countXX(str, xx) {
    let countChar = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "x" && str[i + 1] === "x") {
        countChar++;
      }
    }
    return countChar;
  }
  </code></pre>
`;

//Count number of xx in a string.
//xs can overlap

//Function takes parameter str and xx
//Look at each character,
//If XX, add it (loop)

//function (str, XX) {
// let countChar = 0
//for (let i=0; i < str.length; i++) {
//if (str[i] === XX) {
//countChar++
//return countChar

function countXX(str, xx) {
  let countChar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" && str[i + 1] === "x") {
      countChar++;
    }
  }
  return countChar;
}

//Test cases
console.log(countXX("abcxx")); // Expected: 1
console.log(countXX("xxx")); // Expected: 2
console.log(countXX("xxxx")); // Expected: 3
console.log(countXX("abc")); // Expected: 0
console.log(countXX("Hello There")); // Expected: 0
console.log(countXX("Hexxo Thxxe")); // Expected: 2
console.log(countXX("")); // Expected: 0
console.log(countXX("Kittens")); // Expected: 0
console.log(countXX("Kittensxxx")); // Expected: 2
