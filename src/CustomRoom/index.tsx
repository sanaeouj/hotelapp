import React from "react";
import defaultImg from "../utils/Images/room-1.jpeg";
import { Link } from "react-router-dom";
interface IRoomProps {
  room: RoomObject;
}

const index: React.FC<IRoomProps> = React.memo((props) => {
  const { name, slug, images, price } = props.room;
  // console.log(props);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

export default index;

