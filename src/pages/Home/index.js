import React from 'react';
import Cover from '../components/Cover';
import CustomCard  from '../components/CustomCard ';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const index = () => {
    return (
        <React.Fragment>
            <Cover>
                <CustomCard 
                title="luxurious rooms"
                subtitle="luxe rooms starting at 2000Dhs"
                >
                <Link to="/rooms" className="btn-primary">our rooms</Link>
                </CustomCard >
            </Cover>
            <Services/>
            <FeaturedRooms />
        </React.Fragment>
    )
}

export default Home
