import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import "./Prodact.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import SingleProduct from "../../pages/single-product/SingleProduct";
import axios from 'axios';
import { API_URL } from '../../static'
import Skeleton from '../skeleton/Skeleton';



function Prodact() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(8)
    const [loding, setLoding] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoryValue, setCategoryValue] = useState("")


    useEffect(() => {
        axios
            .get(`${API_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        setLoding(true)
        let url = categoryValue === "" ?
            `${API_URL}?limit=${count}` :
            `${API_URL}/category/${categoryValue}?limit=${count}`

        let user = { username: "johnd", password: "m38rmF$" }

        axios
            .get(url, user)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoding(false))
    }, [count, categoryValue])

    const getCategory = (text) => {
        setCategoryValue(text)
        setData([])
    }

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

    let categoriesItem = categories?.map((el, inx) => <option key={inx} value={el}>{el}</option>)

    return (
        <>
            <div className='prodact'>
                {loding && <Skeleton />}

                <select onChange={e => getCategory(e.target.value)} name="" id="">
                    <option value="">All</option>
                    {categoriesItem}
                </select>
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