import React from "react";

const Cover = ({coverClass, children}:CoverProps) => {
 
  return <header className={coverClass}>{children}</header>;
};

export default Cover;


