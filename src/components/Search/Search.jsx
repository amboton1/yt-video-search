import React, { useState } from 'react';

const Search = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        onFormSubmit(term);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit} className="search-form">
                <div className="field">
                    <label htmlFor="search">Video Search</label>
                    <div className="input-video">
                        <input type="text" className="search-term" onChange={onInputChange} value={term} placeholder="Search videos.." />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;