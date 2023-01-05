import React from "react";
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  ); // 버튼 크기, 색상, outline 옵션을 인수로 보낼 수 있게 함
  // outline 혼자 중괄호로 싸인 props인데, outline 값이 true일 때만 button에 outline CSS 클래스가 적용되도록 하기 위함이다. 즉 불리언인 셈.
}

Button.defaultProps = {
  size: "medium", // 기본 사이즈
  color: "blue",
};

export default Button;
