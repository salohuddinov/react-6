import React from 'react'
import Hero from '../../components/hero/Hero'
import Prodact from '../../components/prodact/Prodact'

function Home() {
    return (
        <div className='home'>
            <Hero />
            <Prodact />
        </div>
    )
}

export default Home