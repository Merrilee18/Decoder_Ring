// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybius(input, encode = true) {
    // your solution code here
    let finalString = "";
    if (!input) return false;
    if (encode) {
      const lowerCase = input.toLowerCase();
      for (char of lowerCase) {
        if (char == "i" || char == "j") {
          finalString += `42`;
        } else if (char == " ") {
          finalString += char;
        } else {
          let groups = alphabet.find((group) => group.includes(char));
          let row = alphabet.indexOf(groups) + 1;
          let column = groups.indexOf(char) + 1;

          finalString += `${column}${row}`;
        }
      }
    } else {
      const numInput = input.split(" ").join("");
      if (numInput.length % 2 != 0) return false;
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] !== " ") {
          let var1 = input[i];
          let var2 = input[i + 1];
          finalString += alphabet[var2 - 1][var1 - 1];
        } else {
          finalString += input[i];
          i -= 1;
        }
      }
    }
    return finalString;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
