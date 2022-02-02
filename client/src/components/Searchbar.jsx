import React from 'react'
import './Searchbar.css'

export default function Searchbar({filterBooks, handleSubmit}) {

    //Show the suggestions box again and continue writing the text to the searchbox
    // const continueSuggestion = (event) => {
    //     console.log(event.target.value  )
    //     handleSearchSuggestions(event)
    // }

    //Hide the suggestions box if user presses outside of the box
    // const unfocusSuggestions = () => {
    //     setTimeout( () => {
    //         setSuggestions([])
    //     },1000)
    // }

    return (
    <div className="search-bar-container">
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input 
                onChange={filterBooks}
                type="text" name="search-bar" 
                className='search-bar'>
            </input>
        </form>
        {/* <ul className="autocomplete-list">
            {suggestions.map((suggestion,index) => (
                <li 
                    onClick={onSuggestHandler} 
                    key={index}>
                        {suggestion.title}
                </li>
            ))}
        </ul> */}
    </div>
    )
}
