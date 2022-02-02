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

	//Get books from your own library
	useEffect(() => {
		const getBooks = async() => {
			const response = await fetch('/books')
			const data = await response.json()
			setBooks(books.concat(data.books))
		}
		getBooks()
	},[])

	//Show/hide the modal for adding a new book to the library
	const toggleModal = (event) => {
		event.preventDefault();
		setShowModal(!showModal);
	}
	//Show/hide the sidebar
	const toggleSidebar = () => setShowSidebar(!showSidebar);

	//Show/hide the modal for the books that are in your library
	const toggleBookModal = () => setShowBookInfoModal(!showBookInfoModal);
	
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
				showModal={showModal}/>
			<BookModal  
				showBookModal={showBookInfoModal}
				toggleBookModal={toggleBookModal}/>
		<div className="container">
			<div className='books-container'>
				<Books 
					books={books} 
					filtered={filtered}
					searchContent={searchContent} 
					toggleBookModal={toggleBookModal} />
			</div>
		</div>
		</div>
	);
}

export default App;
