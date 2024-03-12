import { Link } from "react-router-dom";

import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
// import { MdFavorite } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FcShop } from "react-icons/fc";

const NavBar = () => {
    return (
        <div className="navbar  rounded mt-4 bg-cyan-400 justify-between">
            <div className=" w-2/4 flex justify-between">
                <div className="">
                    <Link to="/">

                        <img className="w-14 h-14 rounded-full" src={logo} alt="" />

                    </Link>
                </div>

                <div className="form-control  relative">
                    <span className="absolute top-4 text-xl ml-1 mr-2">
                        <CiSearch />
                    </span>
                    <input type="text" placeholder="    Enter Store name" className=" input input-bordered  w-[500px] " />
                </div>
            </div>

            <div className=" w-1/2 justify-around">
                {/*shift language*/}
                <div className="items-center">
                    
                        <span className=" font-medium">ENG </span>
                         | 
                        <span className=" font-medium"> বাংলা</span>
                    
                </div>

                 {/*Home button*/}
                 <span className="text-lg font-medium"><Link to="/">Home</Link></span>

                {/*visit store button*/}
                
                    <Link className="text-lg font-medium">
                        <button className=" flex justify-center items-center  gap-1">
                            Visit Store
                            <span className="text-lg font-medium text-red-600">
                                <FcShop />
                            </span>
                        </button>
                    </Link>
               

                {/* Favorite button
                <div className=" ">
                    <Link className="text-lg font-medium">
                        <button className="flex justify-center items-center  gap-1">
                            Favorite
                            <span className="text-lg font-medium text-red-500">
                                <MdFavorite />
                            </span>
                        </button>
                    </Link>
                </div> */}

                {/*Cart button*/}
               
                    <Link to="/cart" className="text-lg font-medium">
                        <button className=" flex justify-center items-center  gap-1">
                            Cart
                            <span className="text-lg font-medium text-red-600">
                                <FaCartPlus />
                            </span>
                        </button>
                    </Link>
               
                {/*Order List button*/}
                
                    <Link to="/orderlist" className="text-lg font-medium">
                        <button className=" flex justify-center items-center  gap-1">
                            Order List
                        </button>
                    </Link>
               
                   

               



                {/* user img */}
                {/* <div className="  ">

                    <div className="justify-end dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-cyan-300 rounded-box w-52 ">
                            <li>
                                <a className="justify-between">
                                    Profile

                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default NavBar;