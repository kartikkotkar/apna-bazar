import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import ProductCard from './../../components/ProductCard/ProductCard'
import "./Home.css"

function Home() {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        try {
            const response = await axios.get("/products");

            setProducts(response?.data?.data);
        }
        catch (err) {
            console.log(err);
            alert("Error loading products");
        }
    };

    useEffect(() => {
        loadProducts();
    }, [])
    return (
        <div>
            <Navbar />
            <div className='product-counteainer'>

                {

                    products?.map((product, index) => {

                        const { name, description, image, price,  } = product;

                        return (<ProductCard
                            key={index}
                            name={name}
                            description={description}
                            price={price}
                            image={image}
                           
                        />)

                    })
                }
            </div>
        </div>
    )

}

export default Home