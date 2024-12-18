// src/problems/problem1.js
// Warmup-1  sleepIn problem

// Problem Description
export const problemDescription = `
  <h2>Problem: sleepIn</h2>
  <p>The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.</p>
  <p>Example:</p>
  <pre>
  sleepIn(true, true) → true
  sleepIn(true, false) → false
  sleepIn(false, false) → true
  sleepIn(false, true) → true
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function sleepIn(weekday, vacation) {
    if (!weekday || vacation) {
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;

// Weekday and vacation are both parameters
// If it's a weekday, weekday is true
// If we're on vacation, vacation is true
// If it is not a weekday, return true (we sleep in)
// If it's vacation, return true (we sleep in)
// Otherwise, return false (we don't sleep in)

function sleepIn(weekday, vacation) {
  // if it is not a weekday or if on vacation
  if (!weekday || vacation) {
    return true; // we sleep in
  } else {
    return false; // we don't sleep in
  }
}

//Test cases
console.log(sleepIn(true, true)); // Expected: true
console.log(sleepIn(true, false)); // Expected: false
console.log(sleepIn(false, false)); // Expected: true
console.log(sleepIn(false, true)); // Expected: true
