import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Orders from '../Orders/Orders';

const Products = () => {
    // Fetch products using useLoaderData
    const products = useLoaderData();

    // Initialize cart state
    const [cart, setCart] = useState([]);

    // Function to handle adding a product to the cart
    const handleAdd = (product) => {
        // Add the product to the cart
        setCart([...cart, product]);
    };

    const removeFromCart=(id)=>{
      const  remaining=cart.filter(product=>product.id !==id)
        setCart(remaining);
       
    }

    return (
        <div className='flex flex-col md:flex-row w-full px-12'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-12 mt-10 md:w-[70%] w-full mx-auto'>
                {/* Map over products and render Product component for each */}
                {products.map((product) => (
                    <Product key={product.id} product={product} handleAdd={handleAdd} />
                ))}
            </div>

            {/* Render Orders component with cart passed as prop */}
            <div className='md:w-[30%] w-full mx-auto'>
                <Orders removeFromCart={removeFromCart} cart={cart} />
            </div>
        </div>
    );
};

export default Products;
