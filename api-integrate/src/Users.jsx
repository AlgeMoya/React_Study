import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: action.error,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  // State 대신 Reducer
  // const [users, setUsers] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      // setError(null);
      // setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      // setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      dispatch({ type: "SUCCESS", data: response.data });

      // setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      // setError(e);
      dispatch({ type: "ERROR", error: e });
    }
    // setLoading(false);
  };

  // useEffect에 첫번째 파라미터로 등록하는 함수에는 async를 사용할 수 없기 때문에 함수 내부에서 async를 사용하는 새로운 함수를 선언해 주어야 한다.
  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  // 로딩 상태가 활성화됐을때
  if (loading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다</div>;
  }

  // users에 값이 없을 때
  if (!users) {
    return null;
  }

  // 배열 렌더링할때 map 쓰면 JSON 자동으로 분해해줌 존나편함.
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
