import React from 'react'
import './Services.css'
import ServicesAPI from './ServicesAPI'
const Services = () => {
    return (
        <>
            <div className="serviceContainer" id='Services'>
                <div className="title"><h2>Our Services</h2></div>
                <div className="services">
                    {
                        ServicesAPI.map((value, index) => {
                            return <div className="serviceCard" key={index}>
                                <div className="img">
                                    <img src={value.imgSrc} alt="" />
                                </div>
                                <div className="serviceTitle">
                                    <h4>{value.heading}</h4>
                                </div>
                                <div className="serviceDesc">
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                <hr />
            </div>
        </>
    )
}

export default Services