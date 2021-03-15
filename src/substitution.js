// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


//new alphabet: 
//1!2@3#4$5%67&890gdsfkliops

//encode: 
//loop through each character's position in alphabet
//replace character using new alphabet location
// i.e. e = 4, in new alpha 3 = 4, thus e becomes 3



const substitutionModule = (function () {
  // you can add any code you want within this function scope

mainAlphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet) return false;
    
    const noRepeatAlphabet = new Set(alphabet);
    if (noRepeatAlphabet.size !== 26) return false;

    let encodedWord = "";
    let lowerInput = input.toLowerCase();

    for(char of lowerInput) {
      if(char === " ") {
        encodedWord += char;
      } else {
        if (encode) {
          encodedWord += alphabet[mainAlphabet.indexOf(char)];
        } else {
          encodedWord += mainAlphabet[alphabet.indexOf(char)];
        }
      }
    }
    return encodedWord;
  }
  return {
    substitution,
  };

  })();

module.exports = substitutionModule.substitution;
