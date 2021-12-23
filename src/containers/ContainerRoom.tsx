import React from 'react';
import RoomsFilter from '../components/FiltreRoom';
import RoomsList from '../components/RoomLists';
import { withRoomConsumer } from '../store/context';
import CustomLoading from '../components/CustomLoading';



interface IPropsRoomsContainer {
    context: RoomsObject
}

// Use Context in functional component with HOC
const RoomsContainer: React.FC<IPropsRoomsContainer> = ({context}) => {

    const {loading, rooms, sortedRooms} = context;
    console.log("context", context);

    if (CustomLoading) {
        return <CustomLoading />
    }
    return (
        <React.Fragment>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms}/> 
        </React.Fragment>
    );
}

export default withRoomConsumer(RoomsContainer);