import React from "react"; 

export const index: React.FC<CoverProps> = ({ title }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
    </div>
  );
};

export default index;
