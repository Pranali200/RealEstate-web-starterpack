import React from 'react'
import "./Hero.css"

const Hero =()=>{
    return (
        <section className ="hero-wrapper">
            <div className ="padding innerWidth flexCenter hero-cointainer">

                <div className ="hero-left">
                    Left section
                </div>

                <div className ="flexCenter hero-right">
                    <div className ="image-cointainer">
                        <img src ="./hero-image.png" alt=""/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero