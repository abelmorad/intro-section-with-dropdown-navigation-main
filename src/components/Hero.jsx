import React from "react";
import heroImage from '../../public/images/image-hero-mobile.png';

export default function Hero() {
    return (
        <section className="hero-page">
            <img src={heroImage} className="hero-img-mobile" alt="herobro" />
        </section>
    )
}