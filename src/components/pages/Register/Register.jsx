import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" w-full  hero-content  flex-col lg:flex">
                <div className=" text-center ">
                    <h1 className="text-5xl font-bold">Register Here!</h1>

                </div>
                <div className="card w-1/3  shrink-0 shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-medium">Create Account</button>
                        </div>
                        <span className="text-center font-medium">Already Have Account ? Go <Link to="/login">
                            <span className="text-lime-800">LogIn</span>
                        </Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;