import { Component } from "react";
import './search-box.component.css'

const SearchBox = ({
    onSearchChange,
    placeholder
}) => (
        <input 
             className='searchBox' 
             type='search' 
             placeholder={placeholder}
             onChange={onSearchChange} 
        />
    )


export default SearchBox