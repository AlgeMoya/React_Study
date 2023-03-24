import React, {useReducer} from "react";
import { useSampleState, useSampleDispatch } from "./SampleContext";

/* SampleContext로 이동된 부분
type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}

// 타입스크립트에서는 리듀서가 받을 수 있는 액션들을 미리 정의해줘야 한다. 
type Action = 
    | {type: 'SET_COUNT'; count: number}
    | {type: 'SET_TEXT'; text: string}
    | {type: 'SET_COLOR'; color: Color}
    | {type: 'TOGGLE_GOOD'};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                // 불변성을 유지해줘야 함!
                ...state,
                count: action.count // count가 자동완성되며, number 타입인 것을 알 수 있습니다.
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text // text가 자동완성되며, string 타입인 것을 알 수 있습니다.
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color // color가 자동완성되며, color가 Color 타입인 것을 알 수 있습니다.
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            };
        default:
            throw new Error('Unhandled action')            
    }
}
*/

// useReducer에 넣는 첫번째 파라미터는 reducer 함수고 두번째 파라미터는 초기 상태이다.
function ReducerSample() {
    /* SampleContext로 이동된 부분
    // state: 사용할 상태, dispatch: 액션을 발생시키는 함수
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });
    */

    const state = useSampleState();
    const dispatch = useSampleDispatch();

    const setCount = () => dispatch({type: 'SET_COUNT', count: 5}); // count를 넣지 않으면 에러 발생
    const setText = () => dispatch({type: 'SET_TEXT', text: 'bye'}); // text를 넣지 않으면 에러 발생
    const setColor = () => dispatch({type: 'SET_COLOR', color: 'orange'}); // orange를 넣지 않으면 에러 발생
    const toggleGood = () => dispatch({type: 'TOGGLE_GOOD'}); 

    return (
        <div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text: </code> {state.text}
            </p>
            <p>
                <code>color: </code> {state.color}
            </p>
            <p>
                <code>isGood: </code> {state.isGood ? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    )
}

export default ReducerSample;