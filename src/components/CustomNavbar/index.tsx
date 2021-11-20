import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./index.css";
const index = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Rooms">Rooms</Nav.Link>
      <Nav.Link href="#VipRooms">Vip Rooms</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
     );
};
export default index;
