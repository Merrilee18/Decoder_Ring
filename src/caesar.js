// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //your solution code here
    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }
    if (encode === false) {
      shift = -shift;
    }

    let result = "";

    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      //If the character is not in the alphabet, record the character as is
      if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
        result += input[i];
      } else {
        let newCharCode = charCode + shift;

        //lowercase wraparound, positive shift
        if (charCode >= 97 && newCharCode > 122) {
          newCharCode = newCharCode - 122 + 96;
        }
        //uppercase wraparound, positive shift
        if (charCode <= 90 && newCharCode > 90) {
          newCharCode = newCharCode - 90 + 64;
        }
        //lowercase wraparound, negative shift
        if (charCode >= 97 && newCharCode <= 96) {
          newCharCode = newCharCode + 122 - 96;
        }
        //uppercase wraparound, positive shift
        if (charCode >= 65 && newCharCode <= 64) {
          newCharCode = newCharCode + 90 - 64;
        }

        result += String.fromCharCode(newCharCode);
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
