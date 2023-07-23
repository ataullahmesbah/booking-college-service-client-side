import { Link } from "react-router-dom";
import Container from "../Container";
import UserProfile from "../UserProfile/UserProfile";
import logo from '../../../images/logo.png'


const Navbar = () => {
    return (


        // Scholars For Search

        <div className="fixed w-full z-10 shadow-sm bg-gradient-to-r from-emerald-300 to-blue-400">
            <div className="py-4 ">
                <Container>
                    <div className="flex flex-row items-center gap-4 md:gap-0 justify-between">


                        {/* Logo Website start */}
                        <div className="flex items-center gap-3">
                            <Link>
                            <img className="w-full h-10" src={logo} alt="" />
                                
                            </Link>
                           
                                <Link to='/'>
                                <h4 className="text-3xl  font-extrabold text-blue-950">S-FORS</h4>
                                </Link>
                            
                        </div>
                        {/* Logo Website end */}

                        {/* navbar right section start */}
                        <div className=" space-x-5   hidden md:block  text-gray-300  tracking-wide">

                            <Link to='/' className="text-black font-semibold  hover:text-blue-700">Home</Link>
                            <Link to='/college' className="text-black font-semibold  hover:text-blue-700">Colleges</Link>
                            <Link to='/admission' className="text-black font-semibold  hover:text-blue-700">Admission</Link>
                            <Link to='/mycollege' className="text-black font-semibold  hover:text-blue-700">My College</Link>
                        </div>

                        {/* user info */}
                        <div className="">
                            <UserProfile/>
                            </div>

                    </div>
                </Container>
            </div>

        </div>
    );
};

export default Navbar;