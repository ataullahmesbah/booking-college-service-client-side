import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenu, setIsMenu] = useState(false);
    const [isHover, setIsHover] = useState(false);




    return (
        <div className="relative">

            <div
                onClick={() => setIsMenu(!isMenu)}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="text-2xl text-gray-900 p-4 md:py-1 md:px-2 flex flex-row items-center cursor-pointe transition gap-4">

                {/* photoUrl */}
                <div>

                    {
                        user && user.photoURL ? (
                            <>
                                <div className="relative">
                                    <img src={user.photoURL} alt="Profile" className="w-9 h-9 rounded-full" />
                                    {isHover && (
                                        <span className="absolute top-0 left-full ml-2 text-white bg-gray-800 p-1 rounded text-sm whitespace-nowrap overflow-hidden">
                                            {user.displayName}
                                        </span>
                                    )}
                                </div>
                            </>
                        ) : (
                            <FaUserEdit />
                        )
                    }

                </div>

            </div>


            {
                isMenu && (
                    <div className="absolute rounded-xl shadow-md w-[50vw] md:w-3/4 bg-gradient-to-r from-gray-700 to-gray-400 overflow-hidden right-0 top-14 text-white p-28 pb-5 pt-5">

                        <div className="flex flex-col cursor-pointer">

                        <Link to='/updateprofile'
                                className=' mx-[-50px] py-3 transition '
                            >
                                <button className="btn btn-xs btn-warning">View Profile</button>
                            </Link>

                            <Link to='/'
                                className='block md:hidden mx-[-40px] py-3hover:bg-gray-400 transition '
                            >
                                Home
                            </Link>
                            <Link to='/college'
                                className='block md:hidden mx-[-40px] py-3 hover:bg-gray-400 transition '
                            >
                                Colleges
                            </Link>
                            <Link to='/admission'
                                className='block md:hidden mx-[-40px] py-3hover:bg-gray-400 transition '
                            >
                                Admission
                            </Link>
                            <Link to='/mycollege'
                                className='block md:hidden mx-[-40px] py-3 hover:bg-gray-400 transition '
                            >
                                My College
                            </Link>

                            {
                                user ? (

                                    <div className="mx-[-40px] py-3 p-3 hover:bg-gray-200 transition  cursor-pointer"
                                        onClick={logOut}
                                    >
                                        Logout

                                    </div>
                                ) : (
                                    <>
                                        <Link
                                            to='/login'
                                            className=' mx-[-40px] py-3  transition font-semibold'
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to='/signup'
                                            className='mx-[-40px] py-3  transition font-semibold '
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )
                            }

                        </div>


                    </div>
                )
            }

        </div>
    );
};

export default UserProfile;