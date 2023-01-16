import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    // 파라미터가 숫자 타입이면 앞으로 가거나 뒤로 간다.
    // navigate(-2); // 두 페이지 뒤로
    // navigate(1); // 한 페이지 앞으로(되는 경우만)
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    navigate("/articles", { replace: true }); // replace 옵션을 주면 페이지 이동 시 현재 페이지를 페이지 기록에 남기지 않는다.
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
