import React from 'react';
import Cover from '../components/Cover';
import CustomCard  from '../components/CustomCard';
import { Link } from 'react-router-dom';
import RoomsContainer from '../containers/RoomsContainer';

const index = () => {
    return (
        <React.Fragment>
        <Cover coverClass="roomsHero">
            <CustomCard 
            title="our rooms"
            >
            <Link to="/" className="btn-primary">return home</Link>
            </CustomCard>
        </Cover>
        <RoomsContainer />
        </React.Fragment>
    )
}

export default Rooms;