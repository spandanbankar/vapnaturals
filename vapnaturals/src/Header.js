import React from 'react'
import './Header.css'
import Search from './icons/322497_search_icon.png'
import Logo from './images/VAPNATURALS-logos.jpeg'
import ShoppingBag from './icons/shopping-bag.png'
import { Link } from "react-router-dom"
import {useStateValue} from './StateProvider'


function Header() {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to='./'>
            <img className='header__logo' src={Logo} alt='not available' />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <img className='header__searchIcon' src={Search} alt='not available' />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Namaste!</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Orders</span>
                    <span className='header__optionLineTwo'>& Returns</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Our</span>
                    <span className='header__optionLineTwo'>Journey</span>
                </div>
                <Link to="./Checkout">
                <div className='header__optionBasket'>
                    <img src={ShoppingBag} width='30' alt='not available' />
                    <span className='header__optionLinrTwo header__basketCount'>{basket?.length}</span>
                    
                </div>
                </Link>

            </div>
        </div>
    )
}

export default Header