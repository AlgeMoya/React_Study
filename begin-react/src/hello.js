import React, {Component} from 'react';

// function Hello(props) {
    // return <div style={{color: props.color}}>안녕하세요 {props.name}</div>
// }

/* 클래스형 컴포넌트를 사용하지 않은 컴포넌트 선언
// 위와 달리 아래처럼 비구조화 할당 문법을 사용해서 간결하게 코드를 쓸 수 있다.
function Hello({ color, name, isSpecial }) {
    // isSpecial 값이 true라면 <b>*</b>를 렌더링한다.
    // isSpecial 값이 false일 때 isSpecial && <b>*</b>의 결과가 false임에 주의.
    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    )
}
*/

class Hello extends Component {
    /*
    // props를 받지 않았을 때 기본값으로 사용되는 값인 defaultProps를 이렇게 클래스 내부에서 선언할 수 있다.
    static defaultProps = {
    name: '이름없음'
    }
    */

    render() { // 클래스형 컴포넌트에서는 render() 메소드에서 렌더링하려는 JSX가 반환되어야만 한다.
        const {color, name, isSpecial} = this.props; // props 조회 방법
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

// props를 받지 않았을 때 기본값으로 사용되는 값
Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;