interface RoomObject {
    name: string;
    slug: string;
    images: string[];
    price: number;
  }
  interface IRoomProps {
    room: RoomObject;
}