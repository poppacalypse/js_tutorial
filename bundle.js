(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"poppacalypse-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all Strings using prototype.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.

function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  };

  // Returns the letters in the content.
  // e.g. new Phrase("Hello, darkness!").letters() === "Hellodarkness"
  this.letters = function letters() {
    // 4 an even more compact method than 3
    return (this.content.match(/[a-z]/gi) || []).join("");
    // return this.content.match(/[a-z]/gi).join("");

    // 5 Exercise: introduce lettersRegex to FP method
    /*
    const lettersRegex = /[a-z]/gi;
    return Array.from(this.content).filter(c => c.match(lettersRegex)).join("");
    */

    // 3 functional programming
    /*
    return Array.from(this.content).filter(c => c.match(/[a-z]/gi)).join("");
    */

    // 2 forEach method
    /*
    let theLetters = [];
    const lettersRegex = /[a-z]/i;   // i = case insensitive

    Array.from(this.content).forEach(function(character) {
      if (character.match(lettersRegex)) {
        theLetters.push(character);
      }
    });
    return theLetters.join("");
    */

    // 1A for loop, duplication removed
    /*
    let theLetters = [];
    for (let i=0; i<this.content.length; i++) {
      let character = this.content.charAt(i);
      if (character.match(/[a-zA-Z]/)) {
          theLetters.push(character);
      }
    }
    return theLetters.join("");
    */

    // 1 for loop
    /*
    let theLetters = [];
    for (let i=0; i<this.content.length; i++) {
      if (this.content.charAt(i).match(/[a-zA-Z]/)) {
          theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
    */

  };

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}

},{}]},{},[1]);
