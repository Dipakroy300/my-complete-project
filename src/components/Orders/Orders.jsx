import React from 'react';
import { Button } from "@material-tailwind/react";
const Orders = ({ cart,removeFromCart }) => {
  
    return (
        <div className='ms-40'>
            <h1 className='fixed bg-amber-800 p-4 rounded-lg top-20 text-white'>Order Summary:{cart.length}</h1>
         
              <div className='mt-20'>
              {cart.map((item, index) => (
                        <div className='bg-orange-400 mb-3 p-3 rounded-md ' key={index}>
                            
                            <p>{item.title}</p>
                            <p>price:{item.price}</p>
                            <Button onClick={()=>removeFromCart(item.id)} className='mt-2'>X</Button>
                        </div>
                    ))}
              </div>
          
        </div>
    );
};

export default Orders;
