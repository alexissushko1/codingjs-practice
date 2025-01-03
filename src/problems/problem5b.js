// src/problems/problem5.js
// Warmup-2  stringBits problem

// Problem Description
export const problemDescription = `
  <h2>Problem: stringBits</h2>
  <p>We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.</p>
  <p>Example:</p>
  <pre>
  parrotTrouble(true, 6) → true
  parrotTrouble(true, 7) → false
  parrotTrouble(false, 6) → false
  </pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function parrotTrouble(hour, parrot) {
    if(parrot && (hour < 7 || hour >20) {
     return true;
       } else {
      return false;
    };
    }
  </code></pre>
`;

//Function that takes the parameter hour and parrot
//Hour paramater is the current hour which is from 0-23
// In trouble if parrot is talking and hour is before 7 or after 20

//Look at if parrot is talking and if hour is before 7 or after 20
//If parrot is talking and hour is before 7 or hour is after 20, return true
//else return false

//function parrotTrouble(hour, parrot) {
//if parrot and hour is before 7 or after 20
//return true
//else return false

function parrotTrouble(parrot, hour) {
  if (parrot && (hour < 7 || hour > 20)) {
    return true;
  } else {
    return false;
  }
}

//Test cases
console.log(parrotTrouble(true, 6)); // Expected: true
console.log(parrotTrouble(true, 7)); // Expected: false
console.log(parrotTrouble(false, 6)); // Expected: false
console.log(parrotTrouble(true, 21)); // Expected: true
console.log(parrotTrouble(false, 21)); // Expected: false
console.log(parrotTrouble(true, 23)); // Expected: true
console.log(parrotTrouble(false, 23)); // Expected: false
console.log(parrotTrouble(true, 20)); // Expected: false
console.log(parrotTrouble(false, 12)); // Expected: false
