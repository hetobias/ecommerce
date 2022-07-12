import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones"
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