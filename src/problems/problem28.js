// src/problems/problem28.js
// Warmup-1  stringE problem

// Problem Description
export const problemDescription = `
<h2>Problem: stringE</h2>
<p>Return true if the given string contains between 1 and 3 'e' chars.</p>
<p>Example:</p>
<pre>
stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function stringE(str) {
    let charE = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "e") {
        charE += 1;
      }
    }
    if (charE >= 1 && charE <= 3) {
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;

//look at each char of string
//if char is e, log it
//if there is 1, 2, or 3 "e"s, return true
//else, return false

//assign a variable so that "e"s
//loop through each character
//if includes e, add it
//if added "e"s is between 1 and 3, return true
//else, return false

function stringE(str) {
  let charE = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
      charE += 1;
    }
  }
  if (charE >= 1 && charE <= 3) {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(stringE("Hello")); //Expected output: true
console.log(stringE("Heelle")); //Expected output: true
console.log(stringE("Heelele")); //Expected output: false
console.log(stringE("HII")); //Expected output: false
console.log(stringE("e")); //Expected output: true
console.log(stringE("")); //Expected output: false
