import React from "react";
import {Link, Route, Routes, NavLink} from 'react-router-dom';
import Profile from "./Profile";
import RouterHookSample from "./RouterHookSample";
import WithRouterSample from "./WithRouterSample";

const Profiles: any = () => {
    let activeStyle = {
        textDecoration: "underline",
        background: 'black',
        color: "white",
    };
    let activeClassname = "underline";
    
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <NavLink to="/profiles/velopert"
                    style = {({isActive}) => isActive ? activeStyle : undefined}
                    >velopert</NavLink>
                </li>
                <li>
                    <NavLink to="/profiles/gildong"
                    className = {({isActive}) => isActive ? activeClassname : undefined}
                    >gildong</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element='유저를 선택해주세요' />
                <Route path=":username" element={<Profile />} />
            </Routes>
            <WithRouterSample />
            {/*<RouterHookSample />*/}
        </div>
    )
}

export default Profiles;