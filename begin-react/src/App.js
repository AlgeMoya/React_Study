import React from 'react';
import Hello from './hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './counter';
// import logo from './logo.svg';
// import './App.css';

function App() {
  let name = 'react';

  let style = {
    backgroundColor: 'black', 
    color: 'aqua', 
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    
  }

  return (
    <Wrapper>
    {/* 주석은 화면에 보이지 않습니다. */}
    /* 중괄호로 감싸지 않으면 화면에 보입니다. */
    {/* 속성에 쉼표 안씀 */}
      <Hello name="react" color="red" isSpecial
        // 열리는 태그 내에서는 이렇게도 주석을 작성할 수 있다.
        // 위의 isSpecial처럼 props 값이 없다면 true로 간주한다.
      />
      <Hello color="pink"/>
      <Hello />
      <div style={style}>{name}</div>
      <input />
      <div className="gray-box"></div>
      <br />
      <Counter />
    </Wrapper>


    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
