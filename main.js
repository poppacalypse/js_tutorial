let Phrase = require("poppacalypse-palindrome");

let string = prompt("Pls enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`)
} else {
  alert(`"${phrase.content}" is not a palindrome.`)
}
