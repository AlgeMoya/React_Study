import React, { useState } from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>
          check:
          {check ? "true" : "false"}
        </b>
      </p>
    </div>
  );
}

export default App;
