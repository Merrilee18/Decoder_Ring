// Write your tests here!

const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesarModule", () => {
  it("should maintain capital letters", () => {
    const input = "Does wOrk?";
    const shift = 3;
    const expected = "Grhv zRun?";
    const actual = caesarModule(input, shift);
    expect(actual).to.equal(expected);
  });

  it("should return string who's letters that have been shifted", () => {
    const input = "Does work?";
    const shift = 3;
    const expected = "Grhv zrun?";
    const actual = caesarModule(input, shift);
    expect(actual).to.equal(expected);
  });

  it("should return 'false' if shift === 0, shift is > 25 or < -25, or if no shift is given", () => {
    const input = "Does work?";
    const shift = 0;
    const expected = false;
    const actual = caesarModule(input, shift);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other non-alphabetic characters", () => {
    const input = "Does & w o r k?";
    const shift = 3;
    const expected = "Grhv & z r u n?";
    const actual = caesarModule(input, shift);
    expect(actual).to.equal(expected);
  });

  it("should switch from 'encode' to 'decode'", () => {
    const input = "Grhv zrun?";
    const shift = 3;
    const expected = "Does work?";
    const actual = caesarModule(input, shift, (encode = false));
    expect(actual).to.equal(expected);
  });

  it("The alphabet should form a 'loop', yzabc", () => {
    const input = "xyz";
    const shift = 3;
    const expected = "abc";
    const actual = caesarModule(input, shift);
    expect(actual).to.equal(expected);
  });

  it("The alphabet should form a 'loop' backwards, abc - 3 = xyz", () => {
    const input = "abc";
    const shift = -3;
    const expected = "xyz";
    const actual = caesarModule(input, shift);
    expect(actual).to.equal(expected);
  });

  it("The alphabet should form a 'loop' backwards, ABC - 3 = XYZ", () => {
    const input = "ABC";
    const shift = -3;
    const expected = "XYZ";
    const actual = caesarModule(input, shift);
    expect(actual).to.equal(expected);
  });
});

//****shift the numbers
//****the shift should return false if: shift = 0, ! , <-25 or >25
//****spaces and other non-alphabetic characters should remain the same
//*****capital letters should be ignored
//*****letters should "loop" around a circle, i.e. z + 3 = c
//letters should also loop BACKWARDS in a circle... abc - 3 = xyz
