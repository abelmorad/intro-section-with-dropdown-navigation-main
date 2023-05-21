import React from "react";

import heroImgMobile from '../../public/images/image-hero-mobile.png';
import heroImgDesk from '../../public/images/image-hero-desktop.png';
import databiz from '../../public/images/client-databiz.svg';
import audiophile from '../../public/images/client-audiophile.svg';
import maker from '../../public/images/client-maker.svg';
import meet from '../../public/images/client-meet.svg';

export default function Hero() {
    return (
        <div className="hero-page-center">
            <section className="hero-page">
                <img src={heroImgMobile} className="hero-img-mobile" alt="herobro" />
                <img src={heroImgDesk} className="hero-img-desk" alt="herobro" />
                <div className="hero-msg-container">
                    <div className="hero-msg-wrapper">
                        <h1>Make remote work</h1>
                        <p>
                            Get your team in sync, no matter your location.Streamline processes,
                            create team rituals, and watch productivity soar.
                        </p>
                        <button className="learn-more-btn">Learn more</button>
                    </div>
                    <div className="client-wrapper">
                        <img className="client-img" src={databiz} alt="databiz" />
                        <img className="client-img" src={audiophile} alt="audiophile" />
                        <img className="client-img" src={meet} alt="maker" />
                        <img className="client-img" src={maker} alt="audiophile" />
                    </div>
                </div>
            </section>
        </div>
    )
}