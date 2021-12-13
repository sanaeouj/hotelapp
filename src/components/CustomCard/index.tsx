import React from 'react';

const CustomCard: React.FC<CoverProps> = (props) => {
    const { text, title, children } = props;
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{text}</p>
            {children}
        </div>
    )
}

export default CustomCard;
