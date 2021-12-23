import React from 'react';

const CustomCard= ({subtitle, title, children}:CardProps) => {
    
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default CustomCard;
