import React from 'react'
import './Gallery.css'
import GalleryImgAPI from './GalleryImgAPI'




const Gallery = () => {
    return (
        <>
            <div className="Gallerycontainer" id='Gallery'>
                <div className="title">
                    <h2>Uncover the Beauty of Our Hostel in Pictures</h2>
                </div>
                <div className="gallery">
                        {
                            GalleryImgAPI.map((value, index) => {
                                return <div key={index} className='imgCard'>
                                    <div className="img">
                                    <img src={value.imgSrc} alt="" />
                                    </div>
                                    <div className="cardTitle">
                                        <h4>{value.heading}</h4>
                                    </div>
                                    <div className="desc">
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

export default Gallery