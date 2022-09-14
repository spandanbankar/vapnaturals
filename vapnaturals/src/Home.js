import React from 'react'
import './Home.css'
import Banner from './banner/2.png'
import Product from './Product'
import Ghee from './images/ghee.jpg'


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
        <img className='home__image' src={Banner} alt='not available' />        
            <h1 className='home__featuredProducts'>Featured Products</h1>
            <div className='home__row'>
              <Product id="1001" title='Pure Desi Ghee' price = {699} image={Ghee} />
              <Product id="1001" title='Pure Desi Ghee' price = {699} image={Ghee} />
              <Product id="1001" title='Pure Desi Ghee' price = {699} image={Ghee} />
              <Product id="1001" title='Pure Desi Ghee' price = {699} image={Ghee} />
            </div>
        </div>
    </div>
  )
}

export default Home