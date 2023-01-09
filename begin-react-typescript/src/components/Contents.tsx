import * as React from "react";

export const Contents: React.FunctionComponent<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <div title={title}>
      {children}
      <br />

      {title}
    </div>
  );
};
