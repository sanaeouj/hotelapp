import React from 'react';
import loadingGif from "../../utils/Images/gif/loading-arrow.gif";

const index: React.FC = () => {
    return (
    <div className="loading">
      <h4>rooms data loading....</h4>
      <img src={loadingGif} alt="loading..." />
    </div>
    )
}

export default index;
