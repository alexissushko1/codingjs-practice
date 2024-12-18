// src/problems/problem2.js
// Warmup-1  monkeyTrouble problem

// Problem Description
export const problemDescription = `
  <h2>Problem: monkeyTrouble</h2>
  <p>We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.</p>
  <p>Example:</p>
  <pre>
  monkeyTrouble(true, true) → true
  monkeyTrouble(false, false) → true
  monkeyTrouble(true, false) → false
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
function monkeyTrouble(aSmile, bSmile) {
  if (aSmile && bSmile) {
    return true;
  } else if (!aSmile && !bSmile) {
    return true;
  } else {
    return false;
  }
}
  </code></pre>
`;

//There are 2 paramaters, aSmile and bSmile
// if aSmile and bSmile, then true because in trouble
// if aSmile is not true and bSmile is not true, then true because in trouble
// else return false

// function monkeyTrouble(aSmile, bSmile)
// if aSmile and bSmile,
// return true
// else if !aSmile and !bSmile
// return true
// else
// return false

function monkeyTrouble(aSmile, bSmile) {
  if (aSmile && bSmile) {
    return true;
  } else if (!aSmile && !bSmile) {
    return true;
  } else {
    return false;
  }
}

//Test cases
console.log(monkeyTrouble(true, true)); // Expected: true
console.log(monkeyTrouble(false, false)); // Expected: true
console.log(monkeyTrouble(true, false)); // Expected: false
console.log(monkeyTrouble(false, true)); // Expected: false
