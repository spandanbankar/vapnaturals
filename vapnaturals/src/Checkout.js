import React from 'react'
import './Checkout.css'
import Banner from './banner/2.png'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>   
    {/* <img className='home__image' src={Banner} alt='not available' /> */}
        <div className='checkout__left'>
              <div className='checkout__title'> 
                  <h2>Something more to add to Basket?</h2>
                  {/* Basket items */}
              </div>
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
        </div>
  )
}

export default Checkout