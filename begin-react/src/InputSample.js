import React, { useState, useRef } from "react";

function InputSample() {
    // const [text, setText] = useState('');
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        // setText(e.target.value);
        const { value, name } = e.target; // 우선 e.target에서 name과 value를 춫ㄹ
        setInputs({
            ...inputs, // 기존의 inputs 객체를 복사한 뒤
            [name]: value // name 키 값을 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        // setText('');
        setInputs({
            name: '', 
            nickname: ''
        });
        nameInput.current.focus();
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            {/* <input onChange={onChange} value={text}/> */}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;