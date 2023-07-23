import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Shared/Providers/AuthProviders";
import Container from "../Shared/Container";
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from "react-icons/fa";
import logo from '../../images/logo.png';


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
    }

    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })

                    })

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // Password visibility toggle
    const [passwordVisible, setPasswordVisible] = useState(false);

    const showPassword = () => {
        setPasswordVisible(true);
    };

    const hidePassword = () => {
        setPasswordVisible(false);
    };




    return (
        <Container>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">



                <form onSubmit={handleLogIn} className="bg-white shadow-md rounded px-8 py-6 w-1/2 lg:w-1/3">

                    {/* Logo and Log In Icon */}
                    <div className="text-center space-y-3 mb-8">
                        <img className="w-8 h-8 mx-auto" src={logo} alt="" />
                        <h1 className="text-3xl font-bold mb-4">Log Into Your Account</h1>
                    </div>






                    {/* email input field */}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
                            id="email"
                            name='email'
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* password input field */}

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Enter your password"

                            />
                            <div
                                className="cursor-pointer ml-[-15px] self-center "
                                onClick={passwordVisible ? hidePassword : showPassword}
                            >
                                {passwordVisible ? (
                                    <FaEyeSlash className="text-gray-500 absolute ml-[-12px] mt-[-7px]" />
                                ) : (
                                    <FaEye className="text-gray-500 absolute ml-[-12px] mt-[-7px]" />
                                )}
                            </div>
                        </div>
                    </div>



                    {/* forgot password */}
                    <div className="flex items-center justify-between mb-4">
                        <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login btn */}
                    <div className="text-center mb-4 ">

                        <input className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full " type="submit" value="Log In" />

                    </div>

                    <div className="flex items-center justify-center mt-5 mb-5">
                        <div className="border border-gray-300 flex-grow mx-4"></div>
                        <div className="text-gray-500">Or</div>
                        <div className="border border-gray-300 flex-grow mx-4"></div>
                    </div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
                        {/* Google Sign In */}
                        <div onClick={handleGoogleSignIn} className=" mt-4 flex bg-red-500 p-2 items-center rounded text-white text-sm border text-center justify-center ">
                            <div className="">
                                <FaGoogle className="text-xl" />
                            </div>
                            <button
                                className="font-bold  focus:outline-none focus:shadow-outline  ml-3"
                                type="button"
                            >
                                Sign In with Google
                            </button>
                        </div>

                        {/* Social Sign In */}
                        <div onClick={handleGoogleSignIn} className=" mt-4 flex bg-blue-500 p-2 items-center rounded text-white text-sm border text-center justify-center ">
                            <div className="">
                                <FaFacebookF className="text-xl" />
                            </div>
                            <button
                                className="font-bold  focus:outline-none focus:shadow-outline  ml-3"
                                type="button"
                            >
                                Sign In with Facebook
                            </button>
                        </div>
                    </div>

                    <p className="text-sm pt-5">Don't have an account? <Link to='/signup' className="text-blue-500 underline">Sign Up</Link></p>
                </form>
            </div>
        </Container>
    );
};

export default Login;