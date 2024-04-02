import React from 'react'
import { Link } from 'react-router-dom';
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
                    <Link to={"/"}>
                        <h3>Home</h3>
                    </Link>
                    <h3>Category<FaChevronDown className='centr__svg' /></h3>
                    <h3>Products<FaChevronDown className='centr__svg' /></h3>
                    <h3>Pages<FaChevronDown className='centr__svg' /></h3>
                    <h3>Blog<FaChevronDown className='centr__svg' /></h3>
                    <h3>Elements<FaChevronDown className='centr__svg' /></h3>
                </div>
                <h2 className='header__right'><FaPhoneAlt /> +123 ( 456 ) ( 7890 )</h2>
            </div>
            <div className="header__bootm">
                <Link to={"/"}>
                    <img className='hb__img' src={herologo} alt="eagrse" />
                </Link>
                <div className="kombo">
                    <input class="search__posk" type="text" placeholder="Search For items..." />
                    <select className='changech' name="" id="">
                        <option className='changech__opt' value="">All</option>
                        <option value="">Electronic</option>
                        <option value="">jewelory</option>
                        <option value="">men's clothing</option>
                        <option value="">women's clothing</option>
                    </select>
                </div>
                <div className="persuid">
                    <Link to={"/loging"}>
                        <h2><IoPerson />Account</h2>
                    </Link>
                    <h2> <CiHeart />Wishlist</h2>
                    <h2> <TbShoppingCart />Cart</h2>
                </div>
            </div >
        </div >
    )
}

export default Header