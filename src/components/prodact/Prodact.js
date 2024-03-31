import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import "./Prodact.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import SingleProduct from "../../pages/single-product/SingleProduct";
import axios from 'axios';

const API_URL = "https://fakestoreapi.com/products/"


function Prodact() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(8)
    const [loding, setLoding] = useState(false)

    useEffect(() => {
        setLoding(true)
        axios
            .get(`${API_URL}?limit=${count}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoding(false))
    }, [count])
    let products = data?.map(el => (
        <div key={el.id} className="card">
            <Link to={`/product/${el.id}`}>
                <img src={el.image} alt="etrgs" />
            </Link>
            <h2 className='card__title'>{el.title}</h2>
            <div className="star">
                <div class="rating">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text"></label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text"></label>
                    <input checked="" type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text"></label>
                </div>
                <p>({el.rating.rate})</p>
            </div>
            <div className="statis">
                <p>by</p>
                <h3 className='statis__category'>{el.category}</h3>
            </div>
            <h3>{el.description}</h3>
            <div className="card__cost">
                <h2 className='prise'>${el.price}</h2>
                <h3 className='cost__h3'>{el.rating.count}</h3>
            </div>
            <button className='card__button'> <MdOutlineShoppingCart className='card__svg' />Add</button>
        </div>
    ))

    return (
        <>
            <div className='prodact'>
                {loding &&
                    <div className="loading">
                        <div className="sharingon">
                            <div className="ring">
                                <div className="to"></div>
                                <div className="to"></div>
                                <div className="to"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                }
                <div className="wrapper">{products}</div>
                <button className='prodact__button' onClick={() => setCount(p => p + 4)}>Ess more</button>
            </div>
            <Routes>
                <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
        </>
    )
}

export default Prodact