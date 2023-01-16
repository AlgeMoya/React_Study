import { Link, Outlet, NavLink } from "react-router-dom";

const Articles = () => {
  // Outlet: Route의 children으로 들어가는 JSX 엘리먼트를 보여준다.
  // 더 쉽게 풀어서 얘기하자면, App.jsx의 부모 Route를 가져다가 보여준다. 따라서, 같은 부모의 children으로 언제든지 이동할 수 있다.
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }: { id: any }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
