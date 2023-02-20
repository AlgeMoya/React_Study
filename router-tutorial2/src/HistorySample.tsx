import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function HistorySample({history}: any) {
    const navigate = useNavigate()

    const goBack = () => {
        const answer = window.confirm('정말 떠나시겠어요?')
        if (answer) {
            navigate(-1)
        }
        // history.goBack(); // react-router v5
    };

    const goHome = () => {
        navigate('/')
        // history.push('/'); // react-router v5
    }

    /*
    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실건가요?')
        return () => {
            unblock();
        };
    }, [history]);
    */

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;