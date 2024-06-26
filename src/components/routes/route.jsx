import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import About from "../About/About";
import Contact from "../Contact/Contact";
import GrandPa from "../GrandPa/GrandPa";
import MaiLayout from "./MaiLayout";
import Posts from "../Posts/Posts";
import Users from "../Users/Users";
import PostDetails from "../PostDetails/PostDetails";
import PostInfo from "../Post/PostInfo/PostInfo";
import Albums from "../Albums/Albums";
import AlbumInfo from "../AlbumInfo/AlbumInfo";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MaiLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch('products.json')
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/posts",
                element: <Posts></Posts>,
            },
            {
                path: "/grandpa",
                element: <GrandPa></GrandPa>,
            },
            {
                path: "/users",
                element: <Users></Users>,

            },
            {
                path: "postDetails/:id",
                element: <PostDetails />
            }
            ,
            {
                path:"postInfo/:id",
                element: <PostInfo></PostInfo>,
            },
            {
                path:"albums",
                element: <Albums></Albums>,
            },
            {
                path:"albumInfo/:id",
                element: <AlbumInfo></AlbumInfo>
            },
          
            //     {
            //         path:"user/:userId",
            //         element:<PostDetails></PostDetails>,
            //         loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

            //    }

        ]

    },

]);

export default router