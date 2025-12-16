import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          My Blog
        </Link>

        <nav className="nav">
           <NavLink to="/posts">
            Posts List
          </NavLink>
          <NavLink to="auth/login">
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
