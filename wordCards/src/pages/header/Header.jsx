// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  console.log("https://getbootstrap.com/docs/4.0/components/navbar/");
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#games">Games</Nav.Link>
              <Nav.Link href="#repeat">Repeat</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav>
        <ul>
          <Link to="/"></Link>
          <Link to="/games">
            <li>games</li>
          </Link>
          <Link to="/repeat">
            <li>repeat</li>
          </Link>
          <Link to="/profile">
            <li>profile</li>
          </Link>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
