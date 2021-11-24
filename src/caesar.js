// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift > 25 || shift < -25) {return false}
    let result = "";
    let shiftModifier = shift;
    let text = input.toLowerCase();
    encode ? shiftModifier = shift : shiftModifier = 0 - shift;

    for (let s in text) {
      if (text.charCodeAt(s) < 97 || text.charCodeAt(s) > 122) result += input[s]
      else {
        let newChar = text.charCodeAt(s) + shiftModifier;
        if (newChar > 122) result += String.fromCharCode(newChar - 26);
        else if (newChar < 97) result += String.fromCharCode(newChar + 26);
        else result += String.fromCharCode(newChar); 
      }
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };