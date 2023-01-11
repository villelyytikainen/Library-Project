import './Books.css'
import Book from './Book.jsx'

const Books = ({books, filtered, searchContent, toggleBookModal, editBook, deleteBook}) => {
    if(books.length === 0){
        return (
        <div className="books-container">
            <h1>No books in the library</h1>
        </div>
        )
    }else if(books.length > 0 && filtered.length === 0 && searchContent === ''){
        return(
            <div className="books-container">
                <ul className="books-list">
                    {books.map((book,index) => (
                        <Book key={index} 
                              title={book.title} 
                              description={book.description} 
                              toggleBookModal={toggleBookModal}
                              editBook={editBook}
                              deleteBook={deleteBook} />
                    ))}
                </ul>
            </div>
        )
        
    }
    // else if(books.length > 10 && filtered.length === 0){
    //     return(
    //         <div>
    //             <p>Too many books</p>
    //         </div>
    //     )
    // }
    else if(filtered.length > 0){
        return(
        <div className="books-container">
                <ul className="books-list">
                    {filtered.map((book,index) => (
                        <Book key={index} 
                              title={book.title} 
                              description={book.description} 
                              toggleBookModal={toggleBookModal} 
                              editBook={editBook}
                              deleteBook={deleteBook} />
                    ))}
                </ul>
            </div>
        )
    }
    else if(filtered.length === 0 && searchContent !== ''){
        return(
            <div>
                <p>No books found</p>
            </div>
        )
    }
}

export default Books;