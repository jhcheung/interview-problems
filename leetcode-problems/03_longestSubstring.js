/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!!!s.length || typeof s !== 'string' ) return 0;
    if(s.length  == 1) return 1;

    let characters = {}; 
    let longestSubstringLength = 0;
    let start = 0; 
    let length = s.length; 

    const strings = s.split('');

      for(let i = 0; i < length; i++) {
          if(characters[strings[i]] !== undefined && characters[strings[i]] >= start) {
          start = characters[strings[i]] + 1
      }
    characters[strings[i]] = i;
    longestSubstringLength = Math.max(longestSubstringLength, (i-start + 1))
  }

    return longestSubstringLength;
};