// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let cypherKey = {'a': '11' , 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f' : '12', 'g' : '22', 'h' : '32', 'i' : '42', 'j' : '42', 'k' : '52', 'l' : '13', 'm' : '23','n' : '33','o' : '43','p' : '53','q' : '14', 'r' : '24','s' : '34','t' : '44', 'u' : '54','v' : '15', 'w' : '25', 'x' : '35','y' : '45','z' : '55'};
  function polybius(input, encode = true) {
    let text;
    let result = '';
    const cyKeys = Object.keys(cypherKey);
    const cyVals = Object.values(cypherKey);
    if (encode) {
      text = input.toLowerCase();
      for (let s of text) {
        s !== ' ' ? result +=cypherKey[s] : result += ' ';
      }
    } else {
      text = input.split(' ').join('');
      if(text.length % 2 != 0) return false;
      for (let i = 0; i < input.length - 1; i+=2) {
        if (input[i] == ' ') {
          result += ' ';
          i-= 1
        }
        else {
          let cross = input[i] + input[i + 1];
          if (cross == '42'){
            result += '(i/j)'
          } 
          else {
            result += cyKeys[cyVals.indexOf(cross)];
          }
        }
      }

    }
    console.log(result)
    return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
