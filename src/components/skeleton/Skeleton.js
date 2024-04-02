import React from 'react'
import './ckeleton.css'

function Skeleton(count = 4) {
    return (
        <div className='skeleton__wrapper container'>
            <div className="skeleton__card">
                <div className="skeleton__image skeleton__anime"></div>
                <div className="skeleton__title skeleton__anime"></div>
                <div className="skeleton__ptice skeleton__anime"></div>
            </div>
            <div className="skeleton__card">
                <div className="skeleton__image skeleton__anime"></div>
                <div className="skeleton__title skeleton__anime"></div>
                <div className="skeleton__ptice skeleton__anime"></div>
            </div>
            <div className="skeleton__card">
                <div className="skeleton__image skeleton__anime"></div>
                <div className="skeleton__title skeleton__anime"></div>
                <div className="skeleton__ptice skeleton__anime"></div>
            </div>
            <div className="skeleton__card">
                <div className="skeleton__image skeleton__anime"></div>
                <div className="skeleton__title skeleton__anime"></div>
                <div className="skeleton__ptice skeleton__anime"></div>
            </div>
        </div>
    )
}

export default Skeleton