// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
 

  function substitution(input, alphabet, encode = true) {
    if(alphabet === undefined || !alphabet || alphabet.length != 26) return false;
    let duplicateChecks = alphabet.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    if (duplicateChecks !== null) return false;
    const key = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    if(encode){
      for(let i = 0; i < input.length; i++) {
        if(input.charAt(i) ===' ') {
          result+=' ';
        } else {
          let charIndex = key.indexOf(input[i]);
          result+=alphabet[charIndex];
        }
      }
    } else {
      for(let i = 0; i < input.length; i++) {
        if(input.charAt(i) === ' '){
          result+=' ';
        } else {
          let charIndex = alphabet.indexOf(input[i]);
          result+=key[charIndex];
        }
      }
    }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };