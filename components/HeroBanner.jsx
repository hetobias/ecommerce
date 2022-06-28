import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
        <p className="beats-solo">text holder</p>
        <h3>mid text</h3>
        <img src="" alt="headphones"
        className="hero-banner-image"/>

        <div>
            <Link href="/product/ID">
                <button type="button">button text</button>
            </Link>
            <div className="desc">
                <h5>Description</h5>
                <p>actual description woohoo</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner