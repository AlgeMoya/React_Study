import React, {useReducer, useContext, createContext, Dispatch} from "react";

// 필요한 타입들을 미리 선언
type Color = 'red' | 'orange' | 'yellow';

// 상태를 위한 타입
type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}

// 모든 액션들을 위한 타입
// 타입스크립트에서는 리듀서가 받을 수 있는 액션들을 미리 정의해줘야 한다. 
type Action = 
    | {type: 'SET_COUNT'; count: number}
    | {type: 'SET_TEXT'; text: string}
    | {type: 'SET_COLOR'; color: Color}
    | {type: 'TOGGLE_GOOD'};

// 디스패치를 위한 타입 (Dispatch를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch의 Generics로 설정
type SampleDispatch = Dispatch<Action>;

/*
SampleStateContext를 정의할 때,
createContext<State>({count: 0, ...}) 식으로 기본값을 지정 해 주고,
useSampleState(): State {...} 으로 return type을 정의 해 주면, null check를 하지 않아도 됩니다.

마찬가지로 SampleDispatchContext를 정의할 때,
createContext<SampleDispatch>(() => null)로 해 주고
useSampleDispatch(): SampleDispatch {...}으로 return type을 정의 해 주면,
null check가 필요하지 않게 됩니다.
*/

// Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

// 리듀서
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

// SampleProvider에서 useReducer를 사용하고
// SampleStateContext.Provider와 SampleDispatchContext.Provicer로 children을 감싸서 반환합니다.
export function SampleProvider({children} : {children: React.ReactNode}) {
    // state: 사용할 상태, dispatch: 액션을 발생시키는 함수
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });

    // console.log(state)

    return (
        <SampleStateContext.Provider value={state}>
          <SampleDispatchContext.Provider value={dispatch}>
            {children}
          </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
      );
    }
// state와 dispatch를 쉽게 사용하기 위한 커스텀 Hooks
// null 체킹을 해주는 것이 매우 중요함!
export function useSampleState() {
    const state = useContext(SampleStateContext);
    // console.log(state);
    if (!state) {
        // Context가 지니고 있는 값이 유효하지 않으면 에러를 발생시킨다.
        // 이렇게 함으로서 이 Hooks를 사용할 때 각 Hooks 함수들이 반환하는 값이 항상 유효함을 보장할 수 있다.
        // 만약 null 체킹을 하지 않으면 결과값의 타입은 State | null, 혹은 Dispatch | null이 된다.
        // null 체킹이 있다면 State, Dispatch만 null 없이 남겨도 된다.
        throw new Error('Cannot find SampleProvider'); // 유효하지 않을 땐 에러를 발생
    }
    return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find SampleProvider'); // 유효하지 않을 땐 에러를 발생
    }
    return dispatch;
}