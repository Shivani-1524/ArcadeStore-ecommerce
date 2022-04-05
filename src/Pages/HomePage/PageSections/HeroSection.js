import React from 'react'
import '../HomePage.css'
import Lottie from "react-lottie";
import animationData from "../../../Assets/Lotties/gunshot.json"
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <section className="hero-section pos-rel">
            <div className='pos-abs bottom-right-gif'>
                <Lottie
                    options={defaultOptions}
                    height={300}
                    width={300}
                />
            </div>
            <h1 className="xl-font lg-title light-txt">
                <span className="gradient-font">Experience </span>Gaming.
            </h1>
            <h1 className="xl-font lg-title light-txt">
                On a <span className="gradient-font">Whole New Level.</span>
            </h1>
            <Link className="hero-link mg-t-40 rg-p light-txt" to="/shop">Shop Now <i
                className="fa fa-solid fa-arrow-right"></i></Link>
        </section>
    )
}

export default HeroSection