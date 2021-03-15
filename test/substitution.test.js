// Write your tests here!

const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("substitutionModule", () => {
  //encoding
  it("should return false if new alphabet is not exactly 26 letters", () => {
    const actual = substitutionModule("hello", "dsfkliops");
    expect(actual).to.be.false;
  });

  it("should return false if the new alphabet is missing", () => {
    const actual = substitutionModule("hello");
    expect(actual).to.be.false;
  });

  it("should encode a word using a substitute alphabet", () => {
    const actual = substitutionModule("hello", "qwertyuioplkjhgfdsazxcvbnm");
    const expected = "itkkg";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in code", () => {
    const actual = substitutionModule("he llo", "qwertyuioplkjhgfdsazxcvbnm");
    const expected = "it kkg";
    expect(actual).to.equal(expected);
  });

  it("ignores capital letters", () => {
    const actual = substitutionModule("Hello", "qwertyuioplkjhgfdsazxcvbnm");
    const expected = "itkkg";
    expect(actual).to.equal(expected);
  });
  it("should return false if there is a duplicate character in new alphabet", () => {
    const actual = substitutionModule(
      "itkkg",
      "qwertyuioplkjhgfddazxcvbnm",
      (encode = false)
    );
    expect(actual).to.be.false;
  });

  //decoding
  it("should decode a word using a substitute alphabet", () => {
    const actual = substitutionModule(
      "itkkg",
      "qwertyuioplkjhgfdsazxcvbnm",
      (encode = false)
    );
    const expected = "hello";
    expect(actual).to.equal(expected);
  });
});
