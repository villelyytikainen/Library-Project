import './App.css';
import {useEffect, useState} from 'react'
import Sidebar from './components/Sidebar'
import Books from './components/Books'
import Modal from './components/Modal';
import BookModal from './components/BookInfoModal'
import Searchbar from './components/Searchbar'

function App() {
	const [books, setBooks] = useState([])
	const [filtered, setFiltered] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [showSidebar, setShowSidebar] = useState(false)
	const [showBookInfoModal, setShowBookInfoModal] = useState(false)
	const [searchContent, setSearchContent] = useState('')

    const getBooks = async() => {
        const response = await fetch('/books')
        const data = await response.json()
        setBooks(books.concat(data.books))
    }
	//Get books from your own library
	useEffect(() => getBooks() ,[])

	const addBook = async(formData) => {
		await fetch('/books',{
			method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
			body: JSON.stringify(formData)
		}).then(res => setBooks(books.concat(res.data)))
	}

	//Editing an existing books in the library
	const editBook = () => {
		console.log('editing a book')
	}

	//Deleting a specific book from the library
	const deleteBook = async(id) => {
		await fetch('/books:id', {
            method: 'DELETE',
        }).then(() => console.log('removed'))
	}

	//Show/hide the modal for adding a new book to the library
	const toggleModal = (event) => {
		event.preventDefault();
		setShowModal(!showModal);
	}
	//Show/hide the sidebar
	const toggleSidebar = () => setShowSidebar(!showSidebar);

	//Show/hide the modal for the books that are in your library
	const toggleBookModal = (event) => {
		setShowBookInfoModal(!showBookInfoModal);
		books.find(book => book.title === event.target.textContent ? console.log(book) : null)
	}

	//Filter the books by search word
	const filterBooks = (event) => {
		if(event.target.value !== ''){
			setSearchContent(event.target.value)
		}

		setFiltered(books.filter(book =>
			book.title.toLowerCase().includes(event.target.value.toLowerCase())))
			console.log(filtered)
    }

	const handleSubmit = (event) => {
            event.preventDefault()
            console.log(event.target.children[0].value)
	}

	return (
		<div className="App">
			<Searchbar
				// handleSearchSuggestions={handleSearchSuggestions}
				filterBooks={filterBooks}
				searchContent={searchContent}
				handleSubmit={handleSubmit}/>
			<Sidebar
				toggleSidebar={toggleSidebar}
				toggleModal={toggleModal}
				showSidebar={showSidebar}/>
			<Modal
				toggleModal={toggleModal}
				showModal={showModal}
				addBook={addBook}/>
			<BookModal
				showBookModal={showBookInfoModal}
				toggleBookModal={toggleBookModal}/>
		<div className="container">
			<div className='books-container'>
				<Books
					books={books}
					filtered={filtered}
					searchContent={searchContent}
					toggleBookModal={toggleBookModal}
					editBook={editBook}
					deleteBook={deleteBook} />
			</div>
		</div>
		</div>
	);
}

export default App;
