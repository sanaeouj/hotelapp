import React from "react";
import CustomBG from "../../components/CustomBG";
import CustomCover from "../../components/CustomCover";
import CustomCard from "../../components/CustomCard";
import { Link } from "react-router-dom";

import ContainerRoom from "../../containers/ContainerRoom";

const Rooms: React.FC = () => {
  return (
    <React.Fragment>
      <CustomCover coverClass="roomsHero" title="">
        <CustomCard title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </CustomCard>
      </CustomCover>
      <ContainerRoom />
    </React.Fragment>
  );
};

export default Rooms;
