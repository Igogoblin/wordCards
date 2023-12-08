import { Link, Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import s from "./header.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Menu } from "antd";
// import Home from "../home/Home";

const Header = () => {
  const [current, setCurrent] = useState("h");
  // console.log("https://getbootstrap.com/docs/4.0/components/navbar/");
  const test = useSelector((state) => state);
  console.log(test);

  const onClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };

  return (
    <header>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-around w-100">
              {/* <Nav.Link href="games">Games</Nav.Link>
              <Nav.Link href="repeat">Repeat</Nav.Link>
              <Nav.Link href="profile">Profile</Nav.Link> */}
              {/* 
              <Link to="/games" className={s.headerLink}>
                games
              </Link>
              <Link to="/repeat" className={s.headerLink}>
                repeat
              </Link>
              <Link to="/profile" className={s.headerLink}>
                profile
              </Link>
              <Link to="/"></Link> */}
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
              >
                <Menu.Item key="h">
                  <Link to="/"></Link>
                </Menu.Item>
                <Menu.Item key="p">
                  <Link to="/profile"></Link>
                </Menu.Item>
                <Menu.Item key="r">
                  <Link to="/repeat"></Link>
                </Menu.Item>
                <Menu.Item key="g">
                  <Link to="/games"></Link>
                </Menu.Item>
              </Menu>
              <Outlet />
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
