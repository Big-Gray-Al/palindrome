About
-----------
This package checks if an input string is a palindrome

$ npm install --global big-gray-al-palindrome
$ vim test.js
let Phrase = require("big-gray-al-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true