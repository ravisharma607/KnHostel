import React from 'react'
import './Gallery.css'
import GalleryImgAPI from './GalleryImgAPI'




const Gallery = () => {
    return (
        <>
            <div className="Gallerycontainer" id='Gallery'>
                <div className="heading">
                    <h2>Gallery</h2>
                </div>

                <div className="gallery">
                        {
                            GalleryImgAPI.map((src, index) => {
                                return <div><img src={src.imgSrc} alt="" /></div>
                            })
                        }
                </div>
            </div>
        </>
    )
}

export default Gallery