import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { FaCartPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";




const Search = () => {
    return (
        

            <div className="w-[768px] md:w-full flex items-center p-3 bg-violet-300 rounded-md">

                <img className="w-14  h-14 rounded-full " src={logo} alt="" />

                <div className="  drop-shadow-md rounded-2xl   relative  px-4 mx-4 bg-white items-center flex  justify-center  ">
                    <span className="  text-2xl font-bold">< CiSearch /></span>

                    <input className="   p-2 rounded-lg outline-cyan-500 m-1 w-[300px] " type="text" name="" placeholder="Search store" />

                </div>

                <div className="p-2 mx-3 font-medium">
                    ENG | বাংলা


                </div>

                <ul className="flex gap-4 ">
                    <li><Link className="btn" to="/">Home
                        <span className="text-lg font-medium text-red-600">
                            <FaHome />
                        </span>

                    </Link></li>
                    <li><Link className="btn" to="#">Visit Store

                        <span className="text-lg font-medium text-red-600">
                            <FcShop />
                        </span>
                    </Link></li>
                    <li><Link className="btn" to="/cart">Cart
                        <span className="text-lg font-medium text-red-600">
                            <FaCartPlus />
                        </span>
                    </Link>
                    </li>


                    <li><Link className="btn" to="#">Favorite
                        <span className="text-lg font-medium text-red-500">
                            <MdFavorite />
                        </span>
                    </Link></li>

                    <li><Link className="btn" to="/orderlist">Order List</Link></li>


                    
                </ul>

                <div className="flex ml-24 gap-2">
                        {/*SignUp button*/}
                        <Link to="/register">
                            <button className="btn btn-info text-white ">Register</button>
                        </Link>
                        {/*SignIn button*/}
                        <Link to="/login">
                            <button className="text-white btn btn-success">LogIn</button>
                        </Link>
                    </div>




            </div>


        
    );
};

export default Search;