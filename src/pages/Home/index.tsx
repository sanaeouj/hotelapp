import React from 'react';
import CustomCover from "../../components/CustomCover";
import CustomCard from "../../components/CustomCard";
import { Link } from 'react-router-dom';
import Services from "../../components/Services";
import FeaturedRooms from '../../components/FeaturedRooms';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <CustomCover title="" text="">
                <CustomCard 
                title="Chambre Luxueuse"
                text="chambres de luxe à partir de 1500dhs"
                >
                <Link to="/rooms" className="btn-primary">nos chambres</Link>
                </CustomCard>
            </CustomCover>
            <Services/>
            {/* <FeaturedRooms room="" /> */}
        </React.Fragment>
    )
}

export default Home
