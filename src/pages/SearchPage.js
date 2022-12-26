import React, { useState } from 'react';
import Article from '../component/Article'
import axios from 'axios';
import "../styles/searchPage.css"

import SearchIcon from '@mui/icons-material/Search';

function SearchPage() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = event => {

        setSearchInput(event.target.value);
    };

    const handleSearch = event => {
        event.preventDefault();
        axios
        .get(`https://hn.algolia.com/api/v1/search?query=${searchInput}`)
        .then(response => {
            setSearchResults(response.data.hits);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (    
        <form onSubmit={handleSearch}>   
                <h1>Article Search Tool</h1>
            <section className="search--form">
                <input
                    required
                    type="text"
                    value={searchInput}
                    onChange={handleInputChange}
                    />
                <button type="submit"><SearchIcon/></button>
        </section>
        {searchResults.map(result => (
            <Article key={result.objectID} title={result.title} author={result.author} url={result.url}/>
        ))}
        </form>
    );
}

export default SearchPage;