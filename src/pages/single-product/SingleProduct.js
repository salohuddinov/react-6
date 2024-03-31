import React, { useEffect, useState } from 'react'
import "./SingleProduct.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';

let API_URL = "https://fakestoreapi.com/products/"

function SingleProduct() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(API_URL)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])
    let { id } = useParams
    let products = data?.find(el => el.id === +id)
    return (
        <div className='singleproduct'>
            {
                products
            }
        </div>
    )
}

export default SingleProduct