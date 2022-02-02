import React from 'react'
import './BookInfoModal.css'

export default function BookInfoModal({title, imgSrc, description,showBookModal,toggleBookModal}) {
    if(showBookModal){
        return (
            <div onClick={toggleBookModal} className="book-info-modal-container">
                <div className="book-info-modal">
                    <h1>{title}</h1>
                    <img src={imgSrc} alt={`${title}`}/>
                    <p>{description}</p>
                </div>            
            </div>
        )
    }
    else{
        return null;
    }
}
