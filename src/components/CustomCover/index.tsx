import React from "react";

const Cover: React.FC<CoverProps> = (props): any => {
  const { coverClass, children } = props;
  return <header className={coverClass}>{children}</header>;
};

export default Cover;

Cover.defaultProps = {
  coverClass: "defaultCustomBG",
};
