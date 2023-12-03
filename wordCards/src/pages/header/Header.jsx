import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
