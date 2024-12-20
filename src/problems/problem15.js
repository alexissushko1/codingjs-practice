// src/problems/problem15.js
// Warmup-1  front22 problem

// Problem Description
export const problemDescription = `
<h2>Problem: front22</h2>
<p>Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.</p>
<p>Example:</p>
<pre>
front22('kitten') → kikittenki
front22('Ha') → HaHaHa
front22('abc') → ababcab
</pre>
`;

// Problem Solution
export const problemSolution = `
  <h2>Solution:</h2>
  <pre><code>
  function front22(str){
    const firstChars = str.slice(0,2);
    const newString = firstChars + str + firstChars;
    return newString;
  }
  </code></pre>
`;

//Given a string (input)
//Take first 2 chars of string
//Return string with first 2 chars added to front and back

//Use slice to get 2 chars of string, set to conts firstChars
//2 chars + str + 2chars

function front22(str) {
  const firstChars = str.slice(0, 2);
  const newString = firstChars + str + firstChars;
  return newString;
}

//Test cases

console.log(front22("kitten")); //Expected output: kikittenki
console.log(front22("Ha")); //Expected output: HaHaHa
console.log(front22("abc")); //Expected output: ababcab
console.log(front22("ab")); //Expected output: ababab
console.log(front22("a")); //Expected output: aaa
console.log(front22("")); //Expected output:
console.log(front22("Logic")); //Expected output: LoLogicLo
