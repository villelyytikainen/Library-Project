import React from 'react'
import './Book.css'

export default function Book({title, toggleBookModal}) {
    return (
        <li className="book-item">
            <div onClick={toggleBookModal} className="book-container">
                <h2 className="book-title">{title}</h2>
                <img src="https://images-na.ssl-images-amazon.com/images/I/91L9MFXhhGL.jpg" />
                <button className="edit-book">Edit</button>
                <button className="delete-book">Delete</button>
            </div>
        </li>
    )
}
