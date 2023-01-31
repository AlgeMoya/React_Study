// https://toby2009.tistory.com/40
// Example.tsx
import React from "react";

interface Props {
  children?: React.ReactElement | string;
}

function Example({ children }: Props) {
  return <button>{children}</button>;
}

export default Example;
