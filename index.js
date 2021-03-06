module.exports = Phrase;
// Adds `reverses` to all strings
    String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
  }

// Defines a phrase object.
  function Phrase(content) {
    this.content = content;

  // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
      return this.letters().toLowerCase();
    }
  // Returns the letters in the content.
    this.letters = function letters() {
      return (this.content.match(/[a-z]/gi) || []).join("");
    }
  // Returns true for a palindrome, false otherwise.
    this.palindrome = function palindrome() {
      return this.processedContent() === this.processedContent().reverse();
    }
  }
// Defines a TranslatdPhrase object
  function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
      return this.translation.toLowerCase();
    }
  }
  TranslatedPhrase.prototype = new Phrase();