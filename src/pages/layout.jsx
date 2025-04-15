import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex gap-8 items-center mt-4 justify-center bg-blue-400 w-fit mx-auto px-10 py-4 rounded-full">
          <li>
            <Link to="/">Taks 3</Link>
          </li>
          <li>
            <Link to="/task4">Task 4</Link>
          </li>
          <li>
            <Link to="/task5">Task 5</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
