import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import College from "../Pages/College/College";
import InfoColleges from "../Pages/College/InfoColleges";
import Admission from "../Pages/Admission/Admission";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'collegedetails/:id',
                element: <CollegeDetails></CollegeDetails>
            },
            {
                path: 'college',
                element: <College></College>
            },
            {
                path: 'infocolleges/:id',
                element: <InfoColleges></InfoColleges>
            },
            {
                path: 'admission',
                element: <Admission></Admission>
            }
        ]
    }
])