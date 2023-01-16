import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams]: [URLSearchParams, Function] =
    useSearchParams();
  // useSearchParams는 배열 형태의 값을 반환한다.
  // 첫번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체로
  // get 메서드를 통해 쿼리파라미터를 조회하거나 set 메서드를 통해 쿼리파라미터를 업데이트할 수 있다.
  // 만약 존재하지 않는다면 null이 조회된다.
  // 두번째 원소는 쿼리파라미터를 객체 형태로 업데이트할 수 있는 함수를 반환한다.
  // 주의!: 쿼리파라미터 조회 시 값은 무조건 문자열 타입임.
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  const location = useLocation();

  // useLocation Hook은 location 객체를 반환한다.
  // location 객체는 현재 사용자가 보고 있는 페이지의 정보를 지니고 있다.
  // location 객체는 pathname, search, hash, state, key 등의 값을 가진다.
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      <p>쿼리스트링: {location.search}</p>
    </div>
  ); // search: 맨 앞의 ? 문자를 포함한 쿼리스트링 값
};

export default About;
