import React, {Component} from "react";

class Counter extends Component {
  
  constructor(props) {
    super(props);
    // 클래스형 컴포넌트의 state는 무조건 객체 형태여야 한다.
    // this.state로 조회하면 된다.
    this.state = {
      counter: 0,
      // this.setState 를 할 때 파라미터에 넣는 객체에 fixed 값을 넣어주지 않아도 값이 유지된다.
      fixed: 1
    };
    // constructor 방식으로 컴포넌트 인스턴스 bind하기
    // this.handleIncrease = this.handleIncrease.bind(this);
    // this.handleDecrease = this.handleDecrease.bind(this);
  }

  /* 근데 화살표 함수 잘 되면 굳이 constructor 안 쓰고 state만 남겨도 됨.
    state = {
    counter: 0
  };
  */

  // 메서드: 클래스 내부에 종속된 함수
  // 화살표 함수는 클래스에 특정 속성을 선언할 수 있게 해준다.
  // CRA에서는 커스텀 메소드를 만들 때 constructor보다 화살표 함수를 많이 사용한다.
  handleIncrease = () => {
    console.log('increase');
    // 객체 안에 업데이트하고 싶은 값을 넣어서 호출한다.
    // this.setState({counter: this.state.counter + 1});
    // 함수형 업데이트로 바꾸었다.
    this.setState(state => ({
      counter: state.counter + 1
    }));
    console.log(this);
  }

  // 클래스에서 커스텀 메서드를 만들게 될 때는 보통 handle을 앞에 붙여서 작명한다.
  handleDecrease = () => {
    console.log('decrease');
    // this.setState({counter: this.state.counter - 1});
    // 함수형 업데이트로 바꾸었다.
    this.setState(state => ({
      counter: state.counter - 1
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );

    /* onClick에서 새로운 함수를 만들어서 전달하는 방법도 있지만,
    // 렌더링할 때마다 함수가 새로 만들어지므로 컴포넌트 최적화가 까다롭다.
    // 한마디로 뻘짓이니까 쓰지마셈 ㅅㄱ
    // 예시일 뿐이니, 따라하실 필요는 없습니다.
    return (
      <div>
        <h1>0</h1>
        <button onClick={() => this.handleIncrease()}>+1</button>
        <button onClick={() => this.handleDecrease()}>-1</button>
      </div>
    );
    */
  }
}

export default Counter;


/* 클래스형 컴포넌트를 사용하지 않은 코드
import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  let [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  
  // let onIncrease = () => {
  //   // 화살표 좌측 ()에는 파라미터, 우측에는 코드 블록 {}
  //   setNumber((prevNumber) => prevNumber + 1);
  // };
  // let onDecrease = () => {
  //   setNumber((prevNumber) => prevNumber - 1);
  // };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
*/