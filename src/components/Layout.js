import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="list">
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
