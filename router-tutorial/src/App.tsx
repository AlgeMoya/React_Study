// https://velog.io/@velopert/react-router-v6-tutorial

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

// URL 파라미터는 profiles/:username과 같이 경로에 :를 사용하여 설정한다.
// 만약 URL 파라미터가 여러 개라면 /profiles/:username/:field와 같은 형태로 설정한다.
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// index props는 path="/"와 동일한 의미를 가진다.
// index prop은 상위 라우트의 경로와 일치하지만 그 이후의 경로가 주어지지 않았을때 보여지는 라우트를 설정할 때 사용된다.
// path="/"와 역할은 동일하나 이를 좀 더 명시적으로 표현할 수 있다.

// * 는 와일드카드 문자로, 아무 텍스트나 매칭된다는 뜻이다.
// 따라서 와읻드카드를 제외한 모든 규칙을 확인하고, 일치하는 게 하나도 없다면 와일드카드를 라우트로 사용하게 된다.

export default App;
