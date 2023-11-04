import React, {useEffect, useState} from "react";
import "./MyOrders.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios';
import { Link } from "react-router-dom";

const  STATUS_BADGE_CLOR_MAP = {
    "pending": "badge-denger",
    "shipping": "badege-warning",
    "delivered": "badege-success"
}

function MyOrders(){
    const [user, setUser] = useState({});
    const [orders, setOrders] = useState([]);


    const loadOrders  = async () => {
        const userId = user._id;

        if(!userId){
            return;
        }

        const response = await axios.get(`/orders/user/${userId}`)
        setOrders(response?.data?.data);
    }

    useEffect(() => {
        loadOrders();
    }, [user]);

    useEffect(() =>{
        const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
        if(storageUser?.email){
            setUser(storageUser);   
           
        }
        else
        {
            alert("You are not logged in!");
            window.location.href = "/login";
        }
        
    }, [] )
    return(
     
        <div>
               <Navbar />
            <h1 className="text-center">MyOrders</h1>
            <div className="orders-container">
                {
                    orders?.map((order, index)=>{
                        const {product, quantity, status, deliveryCharges} = order;
                        return(
                        <div className="order-card">
                            <Link to={`/buy/${product._id}`}>{product.name}</Link>
                            <h3 className="product-price">₹ {product.price} x {quantity} = ₹ {product.price * quantity}</h3>
                            <p className="deliveryCharges">delivery Charges:  ₹{deliveryCharges}</p>
                            <span className={`order-status ${STATUS_BADGE_CLOR_MAP[status]}`}>
                            {status}
                            </span>
                        </div>)
                        
                    })
                }
            </div>
        </div>
    )
}

export default MyOrders