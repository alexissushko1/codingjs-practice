// src/problems/problem26.js
// Warmup-1  close10 problem

// Problem Description
export const problemDescription = `
<h2>Problem: close10</h2>
<p>Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.</p>
<p>Example:</p>
<pre>
in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function in3050(a, b){
    if ((a>=40 && a<= 50) && (b>=40 && b<=50)){
      return true;
    } if ((a>=30 && a<= 40) && (b>=30 && b<=40)) { 
      return true;
    } else {
      return false;
    }
  }
  </code></pre>
`;

function in3050(a, b) {
  if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
    return true;
  }
  if (a >= 30 && a <= 40 && b >= 30 && b <= 40) {
    return true;
  } else {
    return false;
  }
}

//Test cases

console.log(in3050(30, 31)); //Expected output: true
console.log(in3050(30, 41)); //Expected output: false
console.log(in3050(40, 50)); //Expected output: true
console.log(in3050(40, 51)); //Expected output: false
console.log(in3050(39, 50)); //Expected output: false
console.log(in3050(50, 39)); //Expected output: false
console.log(in3050(40, 39)); //Expected output: true
console.log(in3050(49, 48)); //Expected output: true
console.log(in3050(50, 40)); //Expected output: true
console.log(in3050(50, 51)); //Expected output: false
console.log(in3050(35, 36)); //Expected output: true
console.log(in3050(35, 45)); //Expected output: false
