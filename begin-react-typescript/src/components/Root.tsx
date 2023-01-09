import * as React from "react";
import * as ReactDOM from "react-dom";

import { Contents } from "@components/Contents";

// 클래스형 컴포넌트
export class Root extends React.Component {
  render() {
    return (
      <div>
        <Component title={"Hello"}>Hello</Component>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("app"));
