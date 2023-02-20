import React from "react";
import { useParams } from "react-router-dom";

// 프로필에서 사용 할 데이터
const profileData: any = {
    velopert: {
        name: '김민준',
        description:
        'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description : '전래동화의 주인공'
    }
};

const Profile = () => {
    // 파라미터를 받아올 땐 match 안에 있는 params 값을 참조합니다.
    
    // react-router v5 + JavaScript에서의 예시
    /**
     * const {username} = match.params; 
     * const profile = profileData[username];
     */

    // V5 -> V6 useParams로 변경
    const params: any = useParams();
    console.log(params.username); // 선택 유저 콘솔 출력
    const profile = profileData[params.username];

    // 이 코드도 쓸 수 있음
    /*
    const {username} = useParams();
    console.log(username); // 선택 유저 콘솔 출력
    const profile = profileData[username];
    */
    
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>
    }
    return (
        <div>
            <h3>{params.username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;