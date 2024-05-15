import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';

const Product = ({ product, handleAdd }) => {
    const { picture, title, price } = product;

   
    return (
        <div>
            <Card className="w-72">
                <CardHeader shadow={false} floated={false} className="h-60">
                    <img
                        src={picture}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                            {title}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            ${price}
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        onClick={() => handleAdd(product)}
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Product;
