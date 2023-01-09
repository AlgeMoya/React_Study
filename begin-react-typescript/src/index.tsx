import * as React from "react";
import * as ReactDOM from "react-dom";

import { Root } from "@components/Root";

ReactDOM.render(<Root />, document.getElementById("app"));

const Component: React.FunctionComponent<{ title: string }> = ({
  children,
  title,
}) => (
  <div title={title}>
    {children}
    <br />

    {title}
  </div>
);

// 클래스형 컴포넌트
class Root extends React.Component {
  render() {
    return (
      <div>
        <Component title={"Hello"}>Hello</Component>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("app"));
