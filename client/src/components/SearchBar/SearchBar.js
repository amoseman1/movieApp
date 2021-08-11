import React from 'react'
import Form from 'react-bootstrap/Form'
import './SearchBar.css'

function SearchBar() {
    return (
        <>
            <div>Search here</div>
            <Form.Control id="searchbar" type="text" placeholder="Search..." />
        </>
    )
}

export default SearchBar
