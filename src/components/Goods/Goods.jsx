import React, { useEffect, useState } from 'react';
import Good from '../Good/Good';
import './Goods.css'
const Goods = () => {

    const [goods, setGoods] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('goods.json')
        .then(res => res.json())
        .then(data => setGoods(data))
    },[])

    const handleGood = (addGood) =>{
        const newCart = [...cart, addGood]
        setCart(newCart);
    }
    

    console.log(goods)

    return (
        <>
            <h2>Total Goods: {goods.length}</h2>

            <h3>Buy: {cart.length}</h3>

            <div className='goods'>
                {
                    goods.map(loop => <Good key={loop.id} good ={loop} handleGood={handleGood}></Good>)
                }
            </div>
        
        </>
    );
};

export default Goods;