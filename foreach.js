let a = ['ant', 'bat', 'cat', 42];

// forEach loop
/* a.forEach(function(element) {
  console.log(element);
});
*/

// fat arrow notation
a.forEach(element => console.log(element));



let soli = "To be, or not to be, that is the question:";

// for loop
/* for (let i=0; i<soli.length; i++) {
  console.log(soli[i]);
}
*/

// forEach loop
/* Array.from(soli).forEach(function(character) {
  console.log(character);
});
*/

// fat arrow notation
Array.from(soli).forEach(character => console.log(character));
