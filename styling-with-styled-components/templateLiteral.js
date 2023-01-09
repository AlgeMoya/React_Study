const name = "react";
const message = "hello ${name}";

console.log(message); // hello react

// Template Literal을 사용할 때 문자열이나 리터럴이 아닌 객체를 넣는다면?
const object = { a: 1 };
const text = `${object}`;
console.log(text);
// "[object Object}"

// Template Literal을 사용할 때 문자열이나 리터럴이 아닌 함수를 넣는다면?
const fn = () => true;
const msg = `${fn}`;
console.log(msg);
// "() => true"

// Template Literal을 사용하면서도 내부에 넣은 자바스크립트 값을 조회하고 싶을 땐 Tagged Template Literal 문법을 사용할 수 있다.
const red = "빨간색";
const blue = "파란색";
const yellow = "노란색";
const green = "초록색";
function favoriteColors(texts, ...values) {
  console.log(texts);
  console.log(values);

  // 이거 이해하느라 머리 쓰지 말 것! 이딴 함수 쓰는 곳 없으니까 문법 잘 쓰면 이런 묘기도 된다는 정도로 이해할 것.
  /*
  return texts.reduce(
    (result, text, i) =>
      `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ""}`,
    ""
  );
  */
}

// 이렇게 하면 입력한 문자열이 모두 ...values로 보내진 다음 분해되어서 차례대로 ${} 안에 꽂힌다.
favoriteColors(`제가 좋아하는 색은 ${red}과 ${blue}입니다.`);
favoriteColors(`제가 좋아하는 색은 ${yellow}과 ${green}입니다.`);

const StyledDiv = styled`background: ${(props) => props.color}`;

function sample(texts, ...fns) {
  const mockProps = {
    title: "안녕하세요",
    body: "내용은 내용내용 입니다.",
  };
  return texts.reduce(
    (result, text, i) =>
      `${result}${text}${fns[i] ? `<b>${fns[i](mockProps)}</b>` : ""}`,
    ""
  );
}

sample`
제목: ${(props) => props.title}
내용: ${(props) => props.body}
`;

/*
"
제목: 안녕하세요
내용: 내용은 내용내용입니다.
"
*/
