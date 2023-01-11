import React from 'react'
import './Book.css'

export default function Book({title, toggleBookModal, editBook, deleteBook}) {
    return (
        <li className="book-item">
            <div onClick={toggleBookModal} className="book-container">
                <h2 className="book-title">{title}</h2>
                <img src="https://images-na.ssl-images-amazon.com/images/I/91L9MFXhhGL.jpg" />
                <button onClick={editBook} className="edit-book">Edit</button>
                <button onClick={deleteBook} className="delete-book">Delete</button>
            </div>
        </li>
    )
}
