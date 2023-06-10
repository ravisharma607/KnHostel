import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'
import FaqAPI from './FaqAPI'
const Faq = () => {
    return (
        <>
            <div className="faqContainer" id='faqContainer'>
                <div className="title">
                    <h2>frequenty asked question</h2>
                </div>
                <main className="accordionContainer">
                    {
                        FaqAPI.map((value, index) => {
                            return <Accordion defaultActiveKey={[0]} alwaysOpen>
                                <Accordion.Item eventKey={index} className='accordionCards'>
                                    <Accordion.Header className='accordionquestion'><span>👉</span><h3>{value.question}</h3></Accordion.Header>
                                    <Accordion.Body className='accordionAnswer'>
                                        <p>{value.answer}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        })
                    }
                </main >
                <hr />
            </div >
        </>
    )
}

export default Faq