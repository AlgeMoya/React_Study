import { Link } from "react-router-dom";

// 리액트 라우터에서는 a 태그 대신 Link 태그를 써야 한다.
// a 태그를 사용하면 페이지를 이동하면서 페이지를 새로 불러오기 때문이다.
// 하지만 Link 태그는 페이지를 새로 불러오지 않고 History API를 통해 브라우저 주소의 경로만 바꿔주는 식으로 동작한다.

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopoert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
