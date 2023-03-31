import './SideCart.css';
import React, { useEffect } from 'react';


import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({watchTime}) => {
    const handleToast =()=>{
        toast("Wow so easy !");
    }
    const [time,setTime]= useState('0');
    useEffect(()=>{
        const getWatchTimefromLocalStorage = localStorage.getItem('WatchTime');
        setTime(getWatchTimefromLocalStorage);

    },[watchTime])
    console.log(watchTime);
    return (
        <div>
           <p> Watch Time: {time}</p>
          <button onClick={handleToast}>Show Toast</button>
        </div>
    );
};

export default SideCart;