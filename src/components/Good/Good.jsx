import React from 'react';
import './Good.css'
const Good = ({good ,handleGood}) => {
    return (
        <>

            <div className='good'>
                <h3>Name: {good.name}</h3>
                <div>
                    <img src={good.url} alt="" />
                    <p>Price: {good.price}</p>
                    <p>Category: {good.category}</p>
                    <p>Seller: {good.seller}</p>
                    <button onClick={ ()=> handleGood(good)}>Buy</button>
                </div>
            </div>
            
        </>
    );
};

export default Good;