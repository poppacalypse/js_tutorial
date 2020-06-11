let Phrase = require("poppacalypse-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  // let string = prompt("Pls enter a string for palindrome testing:");
  let phrase = new Phrase(event.target.phrase.value);

  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // handle button in a form
  let form = document.querySelector("#palindromeTester");
  form.addEventListener("submit", function(event) {
    palindromeTester(event);
  });

  /*
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function() {
      palindromeTester();
  });
  */

  /* we can also do:
  button.addEventListener("click", palindromeTester;
  but using an anonymous function as shown above covers the more general case where there might be more than one line
  */
});
