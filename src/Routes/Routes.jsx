import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import College from "../Pages/College/College";
import InfoColleges from "../Pages/College/InfoColleges";
import Admission from "../Pages/Admission/Admission";
import AppliedCollege from "../Pages/AppliedCollege/AppliedCollege";
import PrivateRoute from "./PrivateRoute";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Review from "../Pages/Review/Review";


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
            },
            {
                path: 'appliedcollege/:id',
                element: <PrivateRoute>
                    <AppliedCollege></AppliedCollege>
                </PrivateRoute>
            },
            {
                path: 'mycollege',
                element: <MyCollege></MyCollege>
            },
            {
                path: 'review/:id',
                element: <Review></Review>
            }
        ]
    }
])