import React, {useState} from 'react'
import './Modal.css'

export default function Modal({showModal, toggleModal, addBook}) {
    const [formData, setFormData] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        const type = event.target.type;
        const value = event.target.value;
        setFormData(data => type === 'text' ? 
            ({...data, [name]:value}) : 
            ({...data, [name]:checked}))
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(formData)
        addBook(formData)
    }

    if(showModal){
        return (
            <div onClick={toggleModal} className="modal-container">
                <form onClick={(e) => e.stopPropagation()} onSubmit={submitForm} className="new-book-form">
                    <button onClick={toggleModal} className="close-modal">X</button>
                    <div className="book-title-container input-container">
                        <label htmlFor="title">Title</label>
                        <input require 
                               name="title" 
                               type="text" 
                               value={formData.title} 
                               onChange={handleChange} 
                               className="book-title">
                        </input>
                    </div>
                    <div className="book-author-container input-container">
                        <label htmlFor="author">Author</label>
                        <input required 
                               name="author" 
                               type="text" 
                               value={formData.author}
                               onChange={handleChange}    
                               className="book-author">
                        </input>
                    </div>
                    <div className="book-description-container input-container">
                        <label htmlFor="description">Description</label>
                        <input required
                               name="description" 
                               type="text" 
                               value={formData.description}  
                               onChange={handleChange}  
                               className="book-description">
                        </input>
                    </div>
                    <div className="book-read-container">
                        <label htmlFor='read'>Read</label>
                        <input name='read' 
                               type="checkbox"
                               value={formData.read}  
                               onChange={handleChange}>
                        </input>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
    else{
        return null
    }
}
