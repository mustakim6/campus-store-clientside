import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" w-full  hero-content  flex-col lg:flex">
                <div className=" text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card w-1/3  shrink-0 shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-medium">Login</button>
                        </div>
                        <span className="text-center font-medium">New Here ? Please <Link to="/register">
                        <span className="text-blue-800">Register</span>
                        </Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;