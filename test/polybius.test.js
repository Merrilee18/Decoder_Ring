// Write your tests here!

const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybiusModule", () => {
  //decoding
  it("should return false if input is not an even number", () => {
    const actual = polybiusModule("12131", (encode = false));
    expect(actual).to.be.false;
  });

  it("should return false if no input is given", () => {
    const actual = polybiusModule();
    expect(actual).to.be.false;
  });

  it("should translate a series of numbers to letters", () => {
    const expected = "hello";
    const actual = polybiusModule("3251131343", (encode = false));
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to 'i/j'", () => {
    const expected = "h(i/j) fr(i/j)end";
    const actual = polybiusModule("3242 122442513341", (encode = false));
    expect(actual).to.equal(expected);
  });

  //encoding
  it("should translate a string to numbers", () => {
    const expected = "3251131343";
    const actual = polybiusModule("hello");
    expect(actual).to.equal(expected);
  });

  it("should translate i and j to 42", () => {
    const expected = "424223";
    const actual = polybiusModule("Jim");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in code", () => {
    const expected = "3251131343 4432512451";
    const actual = polybiusModule("Hello there");
    expect(actual).to.equal(expected);
  });
});
