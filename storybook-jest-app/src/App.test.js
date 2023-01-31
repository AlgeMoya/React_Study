// https://velog.io/@deli-ght/Jest

import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App from "./App";

test("버튼이 제대로 동작하고 있나요", () => {
  render(<App />);
  // getByRole(role(요소의 역할을 의미하는 속성), 찾아야할 요소 안의 텍스트)
  const button = screen.getByRole("button", { name: "change to blue!" });
  fireEvent.click(button);
  // 기대한 결과가 성공인지 실패인지 판단하는 함수
  // 버튼 요소를 클릭했을 때, 아래의 결과를 기대함
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button.textContent).toBe("change to red!");
});

// test(테스트에 대한 설명, 테스트 함수)
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("버튼이 제대로 잘 작동하고 있습니까?", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "change to blue!" });
  expect(button).toHaveStyle({ backgroundColor: "red" });
});
