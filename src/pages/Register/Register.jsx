import registerPageImg from '../../assets/register_image.png'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SlPicture } from "react-icons/sl";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdMailOutline, MdOutlinePassword, MdDriveFileRenameOutline } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


const Register = () => {

    const {createUser,updateUserProfile,googleLogin,gitLogin} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const navLinks = 
    <>
        <li className=" px-2"><NavLink to="/">Home</NavLink></li>
        <li className=" px-2"><NavLink to="/register">Register</NavLink></li>
        <li className=" px-2"><NavLink to="/login">Login</NavLink></li> 
    </>

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)
        const name = from.get('name')
        const image = from.get('image')
        const email = from.get('email')
        const password = from.get('password')
        console.log("signup info" ,image, name, email, password);

        createUser(email, password, image, name)
            .then((result) => {
                updateUserProfile(image, name)
                .then(() => {
                    console.log('user profile updated');
                    navigate('/');
 
                })
                console.log(result.user);
            })
    }

    return (
        <div className="min-h-screen bg-[#F4FBFF]">
            <Helmet>
                <title>Estatery | Register </title>
            </Helmet>
            <div className="navbar absolute ">
                <div className="navbar-start">      
                </div>
                <div className="navbar-end lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
            </div>
            <div className="hero-content mx-auto flex-col gap-10 lg:flex-row">
                <div className="hidden lg:block text-center">
                    <img className=' h-[50rem]' src={registerPageImg} alt="" />
                </div>
                <div className=" w-full lg:w-1/2 lg:p-10">
                    <form onSubmit={handleRegister} className="">
                        <h1 className='text-5xl pt-20 lg:pt-0 font-bold'>Register</h1>
                        <div className='pt-10'>
                            <h2>Register with Open account</h2>
                            <div className="mb-6 flex gap-5">
                                <button onClick={()=>googleLogin()} className="btn btn-outline mt-3">
                                    <FcGoogle className="text-xl"></FcGoogle>
                                    Google
                                </button>
                                <button onClick={()=>gitLogin()} className="btn btn-outline mt-3">
                                    <FaGithub className="text-xl"></FaGithub>
                                    GitHub
                                </button>
                            </div>
                        </div>
                        <div className="form-control border-t-2 pt-2 mt-8">
                            <h2 className=' text-xs'>Or Register with email address</h2>
                            <div className='pt-2'>
                                <label className="label">
                                    <span className="font-bold pt-1">Profile picture</span>
                                </label>
                                <div className="input input-bordered flex gap-2 items-center">
                                    <span className="text-sm text-[#ababab]">
                                    <SlPicture className="text-xl"></SlPicture>
                                    </span>
                                    <input 
                                    type="url"
                                    name="image"
                                    placeholder="Add your picture URL here"
                                    className='w-full' 
                                    />
                                </div>
                            </div>
                            <div className='pt-2'>
                                <label className="label">
                                    <span className="font-bold pt-1">Name</span>
                                </label>
                                <div className="input input-bordered flex gap-2 items-center">
                                    <span className="text-sm text-[#ababab]">
                                    <MdDriveFileRenameOutline className="text-xl"></MdDriveFileRenameOutline>
                                    </span>
                                    <input 
                                    type="text"
                                    name="name"
                                    placeholder="Add your Name to Register"
                                    className='w-full' 
                                    required />
                                </div>
                            </div>
                            <label className="label pt-2">
                                <span className="font-bold pt-1">Email</span>
                            </label>
                            <div className="input input-bordered flex gap-2 items-center">
                                <span className="text-sm text-[#ababab]">
                                <MdMailOutline className="text-xl"></MdMailOutline>
                                </span>
                                <input 
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className='w-full' 
                                required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label pt-2">
                                <span className=" font-bold pt-1">Password</span>
                            </label>
                            <div className="input input-bordered flex gap-2 items-center">
                                <span className="text-sm text-[#ababab]">
                                <MdOutlinePassword className="text-xl"></MdOutlinePassword>
                                </span>
                                <input 
                                type={showPassword ? "text":"password"}
                                name="password"
                                placeholder="Add a AlphaNumeric password"
                                className='w-full' 
                                required />
                                <span onClick={()=> setShowPassword(!showPassword)} className="text-sm text-gray-600">
                                {
                                    showPassword? <FaRegEye /> : <FaRegEyeSlash /> 
                                }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-0 text-xl text-white bg-[#7065F0] hover:bg-[#cce65b] hover:text-black">Sign Up</button>
                        </div>
                    </form>
                    <div className="pt-10">
                        <p className="label-text">Already have an account 
                        <Link to='/login' className=' font-semibold link-hover '> Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;