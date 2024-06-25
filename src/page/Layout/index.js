import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <div>
            Layout
            <Link to={"/"}>To About</Link>
            <Link to={"/dashboard"}>To Dashboard</Link>
            123
            <Outlet></Outlet>
        </div>
    );
}
export default Layout;