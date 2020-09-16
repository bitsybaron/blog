import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';




const Account = () => {
    const [orders, setOrders] = useState([]);
    const auth = useSelector(r => r.authReducer);

    useEffect(() => {
        const {userId} = auth.user;
        axios.get(`/api/order/history/${userId}`)
        .then(res => {
            console.log(res.data)
            setOrders([res.data]);
            console.log(orders)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div>
           <h2>{auth.user.name}'s Account</h2> 
           <h5>Order History</h5>
           

        </div>
    )
}

export default Account;