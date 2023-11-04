import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import ProductCard from './../../components/ProductCard/ProductCard'
import "./Home.css"

function Home() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')

    const searchProducts = async () => {
        if(search == ''){
            loadProducts();
            return;
        }

        const response = await axios.get(`products/search?q=${search}`);
        setProducts(response?.data?.data);
    }

    useEffect(() => {
        searchProducts();
    }, [search])

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

            <input type='text'
                placeholder='Search'
                className='serch-bar'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }} />


            <div className='product-counteainer'>

                {

                    products?.map((product, index) => {

                        const { _id, name, description, image, price, } = product;

                        return (<ProductCard
                            key={index}
                            name={name}
                            description={description}
                            price={price}
                            image={image}
                            id={_id}
                        />)

                    })
                }
            </div>
        </div>
    )

}

export default Home