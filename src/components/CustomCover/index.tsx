import React from "react";

const CustomCover: React.FC<CoverProps> = (props): any => {
  const { coverClass, children } = props;
  return <header className={coverClass}>{children}</header>;
};

export default CustomCover;

CustomCover.defaultProps = {
  coverClass: "defaultHero",
};
