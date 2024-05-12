import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import About from "../About/About";
import Contact from "../Contact/Contact";
import GrandPa from "../GrandPa/GrandPa";
import MaiLayout from "./MaiLayout";

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
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/grandpa",
                element: <GrandPa></GrandPa>,
            },
          
        ]

    },

]);

export default router