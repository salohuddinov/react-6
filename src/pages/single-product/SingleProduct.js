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
        <>
            <div className='singleproduct'>
                <div class="box">
                    <h1 class="title">product Category</h1>
                    <div class="tasks__1">
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>Juice & Drinks</h3>
                            <h3 class="second">[20]</h3>
                        </div>
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>Dairy & Milk</h3>
                            <h3 class="second">
                                <pre>    [54]</pre>
                            </h3>
                        </div>
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>Snack & Spice</h3>
                            <h3 class="second">[64]</h3>
                        </div>
                    </div>
                    <h1 class="title">Filter By Price</h1>
                    <div class="selector">
                        <div class="slidecontainer">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                        </div>
                        <h2>Price :<span>$20 - $250</span></h2>
                        <button>Filter</button>
                    </div>
                    <h1 class="title">product Category</h1>
                    <div class="tasks__2">
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>blue</h3>
                            <span class="blue">.</span>
                        </div>
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>yellow</h3>
                            <span class="yellow">.</span>
                        </div>
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>red</h3>
                            <span class="red">.</span>
                        </div>
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>green</h3>
                            <span class="green">.</span>
                        </div>
                    </div>
                    <h1 class="title">Weight</h1>
                    <div class="tasks__3">
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>2kg Pack</h3>
                        </div>
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>20kg Pack</h3>
                        </div>
                        <div class="type">
                            <input type="checkbox" id="cbx" />
                            <h3>30kg Pack</h3>
                        </div>
                    </div>
                    <h1 class="title">Products Tages</h1>
                    <div class="tasks__4">
                        <div class="type">
                            <button>
                                <h3>Vegetables</h3>
                            </button>
                            <button>
                                <h3>Juice</h3>
                            </button>
                            <button>
                                <h3>Food</h3>
                            </button>
                            <button>
                                <h3>Dry Fruits</h3>
                            </button>
                            <button>
                                <h3>Vegetables</h3>
                            </button>
                            <button>
                                <h3>Juice</h3>
                            </button>
                        </div>
                    </div>
                </div>
                <img className='single__img' src={product?.image} alt="sg" />
                <div className="single__right">
                    <h2>Seeds Of Change Oraganic Quinoa, Brown</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
                        minus error doloribus saepe natus?</p>
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
                        <p>({product?.rating.rate} Review)</p>
                    </div>
                    <div className="revise">
                        <div class="title__combo">
                            <h2>Brand</h2>
                            <h2>Flavour</h2>
                            <h2>Diet Type</h2>
                            <h2>Weight</h2>
                            <h2>Speciality</h2>
                            <h2>Info</h2>
                            <h2>Items</h2>
                        </div>
                        <div class="combo4">
                            <h4 class="titleh4">: ESTA BETTERU CO</h4>
                            <h4 class="titleh4">: Super Saver Pack</h4>
                            <h4 class="titleh4">: Vegetarian</h4>
                            <h4 class="titleh4">: 200 Grams</h4>
                            <h4 class="titleh4">: Gluten Free, Sugar Free</h4>
                            <h4 class="titleh4">: Egg Free, Allergen-Free</h4>
                            <h4 class="titleh4">: 1</h4>
                        </div>
                    </div>
                    <div className="fost">
                        <h2 className='single__price'>$ {product?.price}</h2>
                        <h3>{product?.rating.count}</h3>
                    </div>
                    <div className="product__count">
                        <h2>Size/Weight :</h2>
                        <button>50kg</button>
                        <button>80kg</button>
                        <button>120kg</button>
                        <button>200kg</button>
                    </div>
                    <button className='addtocart'>Add to cart</button>
                </div>
            </div>

            <div className="body">
                <div className="body__top">
                    <h3>Description</h3>
                    <h3>Information</h3>
                    <h3>Review</h3>
                </div>
            </div>
        </>
    )
}

export default SingleProduct