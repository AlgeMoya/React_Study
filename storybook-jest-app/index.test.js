// https://dev-yakuza.posstree.com/ko/react/create-react-app/jest/

const sum = require(".");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("test index.js file", () => {
  it("sums a and b", () => {
    let result = sum(1, 2);
    expect(result).toBe(3);
    result = sum(3, 4);
    expect(result).toBe(7);
  });
});
