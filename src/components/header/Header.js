import React from 'react'
import "./Header.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import herologo from "../../images/Group 475.svg"
import { IoPerson } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbShoppingCart } from "react-icons/tb";


function Header() {
    return (
        <div className='header'>
            <div className="header__top">
                <RxHamburgerMenu className='header__left' />
                <div className="header__crntr">
                    <h3>Home</h3>
                    <h3>Category<FaChevronDown className='centr__svg' /></h3>
                    <h3>Products<FaChevronDown className='centr__svg' /></h3>
                    <h3>Pages<FaChevronDown className='centr__svg' /></h3>
                    <h3>Blog<FaChevronDown className='centr__svg' /></h3>
                    <h3>Elements<FaChevronDown className='centr__svg' /></h3>
                </div>
                <h2 className='header__right'><FaPhoneAlt /> +123 ( 456 ) ( 7890 )</h2>
            </div>
            <div className="header__bootm">
                <img src={herologo} alt="eagrse" />
                <input class="search" type="text" placeholder="Search For items..." />
                <div className="persuid">
                    <h2> <IoPerson />Account</h2>
                    <h2> <CiHeart />Wishlist</h2>
                    <h2> <TbShoppingCart />Cart</h2>
                </div>
            </div>
        </div>
    )
}

export default Header