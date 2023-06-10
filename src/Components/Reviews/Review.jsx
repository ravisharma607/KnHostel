import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Review.css'
import ReviewAPI from './ReviewAPI'

const Review = () => {

    return (
        <>
            <section id="reviews" className="reviews">
                <div className="title">
                <h2>Discover What People Are Saying</h2>
                </div>
                <Container fluid className='testomonial'>
                    <Carousel controls={false} indicators>
                        {
                            ReviewAPI.map((e, value) => {
                                return <Carousel.Item key={value} className='userCards'>
                                    <div className="userImg">
                                        <img src={e.imgSrc} alt="" />
                                    </div>
                                    <div className="userName">
                                        <h2>{e.userName}</h2>
                                    </div>
                                    <div className="review">
                                        <p>{e.review}</p>
                                    </div>

                                </Carousel.Item>
                            })
                        }

                    </Carousel>
                </Container>
                <hr />
            </section>
        </>
    )
}

export default Review


