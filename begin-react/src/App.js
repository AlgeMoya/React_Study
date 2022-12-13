import React, { useState, useRef, useMemo, useCallback } from 'react';
import Hello from './hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
// import logo from './logo.svg';
// import './App.css';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;
  
  const onChange = useCallback(
    e => {
      const {name, value} = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    }, 
  [inputs]
  );

  const [users, setUsers] = useState([
    {
        id: 1, 
        username: 'velopert', 
        email: 'public.velopert@gmail.com',
        active: true
    }, 
    {
        id: 2, 
        username: 'tester', 
        email: 'tester@example.com',
        active: true
    }, 
    {
        id: 3, 
        username: 'liz', 
        email: 'liz@example.com',
        active: true
    }
  ]);
  
  const nextId = useRef(4);
  const onCreate = useCallback;() => {
    // 배열에 항목 추가하는 로직
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]); // spread 연산자
    // setUsers(users.concat(user)); // concat

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }
  
  const onRemove = useCallback(
    id => {
      // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
      // user.id가 id인 것을 제거함
      setUsers(users.filter(user => user.id !== id)); // users에서 user.id가 id가 아닌 것들만 남긴 새로운 배열로 대체한다.
    }, [users]
  );

  const onToggle = useCallback(
    id => {
      setUsers(users.map(user => 
        user.id === id ? {...user, active: !user.active} : user
        )
      );
    }, [users]
  );

  // const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);

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
      <InputSample />
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성사용자 수 : {count}</div>
      </>
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
