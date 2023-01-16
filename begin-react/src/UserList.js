import React, { useContext, useEffect } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    // console.log('컴포넌트가 화면에 나타남');
    console.log("user 값이 설정됨");
    console.log(user);
    return () => {
      // console.log('컴포넌트가 화면에서 사라짐');
      console.log("user가 바뀌기 전...");
      console.log(user);
    };
  }, [user]);

  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
        // onClick = {() => onToggle(user.id)} // UserDispatch로 대체되어 불필요함
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_USER", id: user.id });
        }}
      >
        삭제
      </button>
    </div>
  ); // <button onClick={() => onRemove(user.id)}>삭제</button> // 마찬가지로 UserDispatch로 대체했으므로 삭제
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          // 더 이상 App.js에서 onRemove와 onToggle을 전달하지 않으므로 제거함
          // onRemove={onRemove}
          // onToggle={onToggle}
        />
      ))}
      {/* <User user = {users[0]} /> */}
    </div>
  );
}

export default React.memo(UserList);
