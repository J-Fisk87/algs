// Cracking the Coding Interview
// Problem <number>: <title>

let assert = require("assert");

let test2 = { strA: "aaabbb", strB: "bbaaab" };
let test6 = { strA: "ab", strB: "aabb" };

function isSubstring(test) {
  if (test.strA.length !== test.strB.length || test.strA.length === 0 || test.strB.length === 0) {
    return false;
  } else {
    return test.strB.concat(test.strB).includes(test.strA);
  }
}

describe("StringRotation", () => {
  it("should return true if strB is a rotation of strA", () => {
    let test1 = { strA: "waterbottle", strB: "erbottlewat" };
    assert.strictEqual(true, isSubstring(test1));
  });
  it("should return false if strB is not a rotation of strA", () => {
    let test3 = { strA: "aaabbb", strB: "bababa" };
    assert.strictEqual(false, isSubstring(test3));
  });
  it("should return false if strB is not the same length as strA", () => {
    let test5 = { strA: "aaasss", strB: "aass" };
    assert.strictEqual(false, isSubstring(test5));
  });
  it("should return false if strB or strA is empty", () => {
    let test4 = { strA: "", strB: "" };
    assert.strictEqual(false, isSubstring(test4));
  });
});
