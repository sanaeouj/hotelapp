import React from 'react';
import Cover from '../components/Cover';
import { Link } from 'react-router-dom';
import CustomCard  from '../components/CustomCard ';

const index = () => {
    return (
        <Cover>
            <CustomCard 
            title="404"
            subtitle="page not found"
            >
            <Link to="/" className="btn-primary">return home</Link>
            </CustomCard >
        </Cover>
    )
};

export default ErrorPage
