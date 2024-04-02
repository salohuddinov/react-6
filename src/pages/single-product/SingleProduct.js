import React, { useEffect, useState } from 'react'
import "./SingleProduct.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../static'


function SingleProduct() {
    const [product, setProduct] = useState(null)
    const [loading, setLoding] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoding(true)
        axios
            .get(`${API_URL}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoding(false))
    }, [])

    if (loading) {
        return <div className="loading">
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

    return (
        <div className='singleproduct'>
            <img src={product?.image} alt="sg" />
        </div>
    )
}

export default SingleProduct