import React from "react";

function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return ( // 컴포넌트 태그 사이에 있는 값을 조회하려면 props.children을 써야 한다.
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;