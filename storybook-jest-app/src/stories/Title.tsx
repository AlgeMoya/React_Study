// https://velog.io/@kimbiyam/React%EC%97%90-Storybook-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0

export interface TitleProps {
  text?: string;
}

function Title({ text }: TitleProps) {
  return <div>{text}</div>;
}

export default Title;
