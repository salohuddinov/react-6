import React from 'react'
import "./Hero.css"
import { FiSend } from "react-icons/fi";
import { HiOutlineX } from "react-icons/hi";


function Hero() {
    return (
        <div className='hero'>
            <div className="hero__left">
                <h4><span className='demo'>100%</span> Organic Vegetables</h4>
                <h1>The best way to
                    stuff your wallet.
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                    reiciendis beatae consequuntur.</p>
                <form className='hero__imput'>
                    <input type="text" placeholder='Your emaill address' />
                    <button>Subscribe</button>
                    <FiSend className='input__svg' />
                </form>
            </div>
            <div className="hero__right">
                <div className="hero__right__buttn">
                    <button><HiOutlineX className='bttn' />Shopping</button>
                    <button><HiOutlineX className='bttn' />Recips</button>
                    <button><HiOutlineX className='bttn' />Kitchen</button>
                    <button><HiOutlineX className='bttn' />News</button>
                    <button><HiOutlineX className='bttn' />Food</button>
                </div>
            </div>
        </div>
    )
}

export default Hero