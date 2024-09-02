import React from 'react'
import "./hero.css"
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="hero-section">
        <div className="hero">
            <h1 className="text_0">Welcome to Axis Bank</h1>
            <p className="text_0">Your Trusted Banking Partner</p>
            <NavLink to="/open_ac" className="cta-button text_0">Get Started</NavLink>
        </div>
        <div className="news-marquee">
            <marquee behavior="scroll" direction="up" scrollamount="3">
                <p>Axis Bank announces new interest rates effective from next month.</p>
                <p>Apply for a personal loan with a special discount this festive season!</p>
                <p>Explore our new credit card offers tailored to your needs.</p>
                <p>Axis Bank wins the Best Bank Award 2024 for innovation in digital banking.</p>
                <p>Get up to 15% cashback on shopping with Axis Bank credit cards this summer.</p>
                <p>New savings account customers get free access to our premium services for 6 months.</p>
                <p>Join our exclusive investment webinar to learn more about smart investments.</p>
                <p>Axis Bank is launching a new mobile app with enhanced features!</p>
            </marquee>
        </div>
    </section>
    )
}

export default Hero
