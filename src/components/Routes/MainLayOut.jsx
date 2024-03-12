import { Outlet } from "react-router-dom";
// import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Search from "../Navbar/Search/Search";

const MainLayOut = () => {
    return (
        <div>
            <Search></Search>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;