let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// return a URL-friendly version of a string
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// we want to convert to lower case with hyphenation
// Kansas -> kansas
// North Dakota -> north-dakota

// === forEach ===
// 1A urls: Imperative version
// basic code

/*
function imperativeURLs(states) {
  let urls = [];
  states.forEach(function(state) {
    urls.push(state.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
*/

// === MAP ===
// 1B urls: Functional version
// > [1, 2, 3, 4].map(n => n**2);
// [1, 2, 9, 16]

/*
function functionalURLs(states) {
  return states.map(state => state.toLowerCase().split(/\s+/).join("-"));
}
*/

// ----------------------------------------------

// === forEach ===
// 2A Imperative: replace long code with urlify
function imperativeURLs(states) {
  let urls = [];
  states.forEach(function(state) {
    urls.push(urlify(state));
  });
  return urls;
}

console.log(imperativeURLs(states));

// === MAP ===
// 2B Functional: replace long code with urlify
function functionalURLs(states) {
  return states.map(state => urlify(state));
}

console.log(functionalURLs(states));

// -------------------------------------------------

// === MAP ===
// 3 Exercise: Using map, write a function that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>.

function urlified(states) {
  return states.map(state => `https://example.com/${urlify(state)}`);
}

console.log(urlified(states));

// ---------------------------------------------------

// === forEach ===
// 4A singles: Imperative version
function imperativeSingles(states) {
  let singles = [];
  states.forEach(function(state) {
    if (state.split(/\s+/).length === 1) {
      singles.push(state);
    }
  });
  return singles;
}

console.log(imperativeSingles(states));

// === FILTER ===
// 4B singles: Functional version
// > [1,2,3,4,5,6,7,8].filter(n => n % 2 === 0);
// [ 2, 4, 6, 8 ]

function functionalSingles(states) {
  return states.filter(state => state.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

console.log("break===========");

// ----------------------------------------------------

// === FILTER ===
// 5 Exercise: Write two filter functions that return the Dakotas: one using String#includes (Section 2.5) to test for the presence of the string “Dakota” and one using a regex that tests for the length of the split array being 2.

// using String#includes
function hasDakota(states) {
  return states.filter(state => state.includes("Dakota"));
}

console.log(hasDakota(states));

// using regex for length of split array being 2
function hasTwoWords(states) {
  return states.filter(state => state.split(/\s+/).length === 2);
}

console.log(hasTwoWords(states));

// -------------------------------------------------------

let numbers = [1,2,3,4,5,6,7,8,9,10];

// === forEach ===
// 6A sum: Imperative solution
function imperativeSum(elmts) {
  let total = 0;
  elmts.forEach(function(n) {
    total += n;
  });
  return total;
}

console.log(imperativeSum(numbers));

// === REDUCE ===
// 6B sum: Functional solution
function functionalSum(elmts) {
  return elmts.reduce((total, n) => { return total += n; });
}

console.log(functionalSum(numbers));

// -------------------------------------------------------

// === forEach ===
// 7A length: Imperative solution
function imperativeLengths(states) {
  let lengths = {};
  states.forEach(function(state) {
    lengths[state] = state.length;
  });
  return lengths;
}

console.log(imperativeLengths(states));

// === REDUCE ===
// 7B length: Functional solution
function functionalLengths(states) {
  return states.reduce((lengths, state) => { lengths[state] = state.length;
                                            return lengths; }, {});
}

console.log(functionalLengths(states));

// -------------------------------------------------------

// === REDUCE ===
// 8 Exercise: Using reduce, write a function that returns the product of all the elements in an array. Hint: Where += adds, *= multiplies.
function functionalProduct(numbers) {
  return numbers.reduce((total, n) => { return total *= n });
}

console.log(functionalProduct(numbers));
