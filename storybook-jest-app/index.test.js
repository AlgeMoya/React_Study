// https://dev-yakuza.posstree.com/ko/react/create-react-app/jest/
// jest --coverage 로 코드 커버리지 결과를 얻을 수 있다.

// index.js 파일에서 함수를 가져온다.
const { sum, makeUser, makeRange } = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Jest의 describe 함수를 사용해서 설명문을 작성하고, 그 아래에 테스트 코드를 포함하는 콜백 함수를 작성한다.
describe("test index.js file", () => {
  it("sums a and b", () => {
    // 가져온 함수에 값을 먹여서 결과를 받은 다음
    let result = sum(1, 2);
    // 결과가 기대한 값과 같은지, 즉 작동이 의도한 대로 됐는지 확인한다.
    expect(result).toBe(3);
    result = sum(3, 4);
    expect(result).toBe(7);
  });
  it("makes a person", () => {
    // Jest가 제공하는 toEqual 함수를 사용해서 간편하게 Object간 비교를 할 수 있다.
    expect(makeUser("Yakuza", 20)).toEqual({
      name: "Yakuza",
      age: 20,
    });
  });
  it("has 3", () => {
    // Jest가 제공하는 makeRange 함수를 사용하면 배열 안에 특정 값이 포함되어 있는지 확인할 수 있다.
    expect(makeRange(1, 4)).toContain(2);
  });
});
