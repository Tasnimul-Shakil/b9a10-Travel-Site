import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/Login/Login";
import Register from '../pages/Register/Register';
import Home from "../pages/Home/Home";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import ViewAllCards from "../pages/ViewAllCards/ViewAllCards";
import About from "../pages/About/About";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import AddNewSpot from "../pages/AddNewSpot/AddNewSpot";
import Profile from "../pages/Profile/Profile";
import UpdateSpot from "../pages/UpdateSpot/UpdateSpot";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async () => {
                    const cardResponse = await fetch('http://localhost:3000/spot');
                    const blogResponse = await fetch('/Blog.json');
                    
                    const cardData = await cardResponse.json();
                    const blogData = await blogResponse.json();
                    
                    return { cardData, blogData };
                }
            },
            {
                path: "/ViewDetails/:id",
                element: <PrivateRoute><ViewDetails /></PrivateRoute>,
                loader: async ({ params }) => {
                    const response = await fetch(`http://localhost:3000/spot/${params.id}`);
                    const data = await response.json();
                    return data;
                }
            },
            {
                path: "/addNewSpot",
                element: <PrivateRoute><AddNewSpot /></PrivateRoute>,
            },
            {
                path: "/viewAllCards",
                element: <PrivateRoute><ViewAllCards /></PrivateRoute>,
                loader: async () => {
                    const response = await fetch('http://localhost:3000/spot');
                    const data = await response.json();
                    return data;
                }
            },
            {
                path: "/about",
                element: <About />,
                loader: () => fetch('/TeamMembers.json').then(res => res.json())
            },
            {
                path: "/blogDetails/:blog_id",
                element: <BlogDetails />,
                loader: () => fetch('/Blog.json').then(res => res.json())
            },
            {
                path: "/AllBlogs",
                element: <AllBlogs />,
                loader: () => fetch('/Blog.json').then(res => res.json())
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/profile/dataUpdate/:id",
                element: <PrivateRoute><UpdateSpot /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/spot/${params.id}`),
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>,
                loader: async () => {
                    const response = await fetch('http://localhost:3000/spot');
                    const data = await response.json();
                    return data;
                }
            },

        ]
    }
]);

export default routes;
