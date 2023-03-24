import React, { useReducer, useState } from "react";

type Action = {type: 'INCREASE'} | {type: 'DECREASE'}; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.

// 복습: 상태를 업데이트할 때 useState 말고도 useReducer를 사용할 수 있다.
// useReducer를 사용해서 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
// 즉, 상태 업데이트 로직을 컴포넌트 바깥이나 다른 파일에서 작성할 수 있다.

// 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환한다.
function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {
    // useState를 사용할 때 제네릭을 사용하여 해당 상태가 어떤 타입을 가지고 있을지 설정해줘야 함.
    // 하지만 제네릭을 사용하지 않아도 웬만하면 알아서 타입을 유추한다.
    // const [count, setCount] = useState<number>(0);
    // 상태가 Null일 수도, 아닐 수도 있을 때는 제네릭이 필요하다.

    /*
        type Information = { name: string; description: string };
        const [info, setInformation] = useState<Information | null>(null);
    */

    // const [count, setCount] = useState(0);
    // state: 사용할 상태, dispatch: 액션을 발생시키는 함수
    // useReducer에 넣는 첫번째 파라미터는 reducer 함수고 두번째 파라미터는 초기 상태이다.
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;