import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./index.css";
const index = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="containernav">
        <Navbar.Brand href="/home">
          <img
            src="../"
            width="50px"
            height="50px"
            alt=""
          />
         Hotel Maroc 
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Rooms">Rooms</Nav.Link>
          <Nav.Link href="/SingleRoom">Single Room </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default index;
