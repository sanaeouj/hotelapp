import React from 'react';
import CustomRoom from '../CustomRoom';
interface IPropsRoomsFilter {
    rooms: any[];
}
const RoomsList: React.FC<IPropsRoomsFilter> = ({rooms}) => {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                { rooms.map(item => {
                    return <CustomRoom key={item.id} room={item} />
                }) }
            </div>
        </section>
    )
}

export default RoomsList;
