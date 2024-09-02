import React from 'react'
import "./services.css"


const Services = () => {
    return (

        <section className="services">
        <div className="container">
            <h2>Our Services</h2>
            <div className="service-item" id="ss_1">
                <h3>Saving Accounts</h3>
                <p>Manage your savings and current accounts.</p>
                
            </div>
            <div className="service-item" id="ss_2">
                <h3>Fixed Deposits</h3>
                <p>Manage your Deposits and check History.</p>
                
            </div>
            <div className="service-item" id="ss_3">
                <h3>Credit Cards</h3>
                <p>Choose the perfect card for your needs.</p>
                
            </div>
            <div className="service-item" id="ss_4">
                <h3>Loans</h3>
                <p>Get the best loan offers tailored for you.</p>
                
            </div>
        </div>
    </section>
    )
}

export default Services
