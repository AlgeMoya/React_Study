import React, { useState } from "react";

function Counter() {
    let [number, setNumber] = useState(0);
    
    let onIncrease = () => { // 화살표 좌측 ()에는 파라미터, 우측에는 코드 블록 {}
        setNumber(prevNumber => prevNumber + 1)
    }
    let onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1)
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;