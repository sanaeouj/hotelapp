import React from "react";
import defaultImg from "../assets/images/room-1.jpeg";
import { Link } from "react-router-dom";
interface RoomProps {
  room: RoomObject;
}
interface RoomObject {
  name: string;
  slug: string;
  images: string[];
  price: number;
}

const index: React.FC<RoomProps> = React.memo((props) => {
  const { name, slug, images, price } = props.room;

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
