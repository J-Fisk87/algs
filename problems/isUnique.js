let tests = ["abcd", "aabbcc", "", "could a bit vector be useful?", "ab"];

function isUnique(string) {
  // edge case escape hatches
  if (string.length < 1) return false;
  if (string.length === 1) return true;

  let hash = {};

  for (let i = 0; i < string.length; i++) {
    if (hash.hasOwnProperty([string[i]])) {
      return false
    } else {
      hash[string[i]] = 1;
    }
  }
  console.log(hash);

  return true

  // //brute force tool #1: the for loop
  // for (let i = 0; i < string.length; i++){
  //     for (let j = i + 1; j < string.length; j++){
  //         if (string[i] === string[j]) return false
  //     }
  // }
  // return true
}

// take in string, check all chars against each other and see if they are the same

// Cracking the Coding Interview
// Problem 1.1: isUnique

let assert = require("assert");

describe("1.1 Is Unique", () => {
  it("should return true if each character is unique", () => {
    assert.strictEqual(true, isUnique(tests[1]));
  });
});
