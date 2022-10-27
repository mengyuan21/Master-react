import { Component } from "react";
import './search-box.component.css'

class SearchBox extends Component {
    render() {
    const {placeholder,onSearchChange} = this.props
        return(
            <input 
             className='searchBox' 
             type='search' 
             placeholder={placeholder}
             onChange={onSearchChange} 
            />
        )
    }
}

export default SearchBox