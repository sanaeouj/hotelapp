import React from "react";

const CustomBG = ({ children, customBG }: CustomBGProps) => {
  return <header className={customBG}>{children}</header>;
};

export default CustomBG;

CustomBG.defaultProps = {
  customBG: "defaultcustomBG",
};
