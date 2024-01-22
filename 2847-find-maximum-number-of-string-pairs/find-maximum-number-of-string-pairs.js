/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
   let count = 0;

   for (let i = 0; i < words.length; i++) {
       for (let j = i + 1; j < words.length; j++) {
           if (areAnagrams(words[i], words[j])) {
               count++;
           }
       }
   }

   return count;
};


function areAnagrams(word1, word2) {
   return word1.split('').sort().join('') === word2.split('').sort().join('');
}