import React, {useState} from "react";

// 타스라서 프롭 형식 지정해줌
type MyFormProps = {
    // 함수를 프롭으로 받는다.
    onSubmit: (form: {name: string; description: string}) => void;
};

// 프롭 안에 입력 시 무엇을 할지가 정의된 프롭이 담겨있다.
function MyForm({onSubmit}: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    })

    // state에서 값 가져오기
    const { name, description } = form;
    
    // 함수. input의 값이 변할 때 이벤트로서 얘가 호출됨.
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target; // 이벤트가 값을 싣고 들어온다.
        setForm({
            // 불변성을 지켜줘야 함!
            ...form,
            [name]: value
        })
        // e 값을 무엇으로 설정해야 할까요?
        // 일단 모를 때는 any 로 설정합니다. (e: any)
    }

    // 함수. Submit하면 얘가 호출된다.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // 여기도 모르니까 any로 하겠습니다. (e: any)
        e.preventDefault();
        onSubmit(form); // App.tsx 등 얘를 호출한 곳에서 뭘 하면 되는지 정의해줌
        setForm({
            name: '',
            description: ''
        }); // 초기화. 내용 비우기
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    )
};

export default MyForm;


