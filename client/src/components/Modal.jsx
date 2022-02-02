import React, {useState} from 'react'
import './Modal.css'

export default function Modal({showModal, toggleModal}) {
    const [formData, setFormData] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        const type = event.target.type;
        const value = event.target.value;
        setFormData(data => type === 'text' ? ({...data, [name]:value}) : ({...data, [name]:checked}))
    }

    const addNewBook = async(event) => {
		event.preventDefault();
		await fetch('http://localhost:3001/books',{
			method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
			body: JSON.stringify(formData)
		}).then(res => res.json())
	}

    if(showModal){
        return (
            <div onClick={toggleModal} className="modal-container">
                <form onClick={(e) => e.stopPropagation()} onSubmit={addNewBook} className="new-book-form">
                    <button onClick={toggleModal} className="close-modal">X</button>
                    <div className="book-title-container input-container">
                        <label htmlFor="book-title">Title</label>
                        <input require 
                               name="book-title" 
                               type="text" 
                               value={formData.title} 
                               onChange={handleChange} 
                               className="book-title">
                        </input>
                    </div>
                    <div className="book-author-container input-container">
                        <label htmlFor="book-author">Author</label>
                        <input required 
                               name="book-author" 
                               type="text" 
                               value={formData.author}
                               onChange={handleChange}    
                               className="book-author">
                        </input>
                    </div>
                    <div className="book-description-container input-container">
                        <label htmlFor="book-description">Description</label>
                        <input required
                               name="book-description" 
                               type="text" 
                               value={formData.description}  
                               onChange={handleChange}  
                               className="book-description">
                        </input>
                    </div>
                    <div className="book-read-container">
                        <label htmlFor='book-read'>Read</label>
                        <input name='book-read' 
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
