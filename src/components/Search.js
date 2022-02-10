import React, {useState} from 'react';

const Search = ({ onSearch }) => {
    const [ search, setSearch ] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearch(search);
    };

    return (
        <div className='search-bar ui segment'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <div className='field'>
                    <label htmlFor=''> Video Search</label>
                    <input value={search} type='text' onChange={(e) => setSearch(e.target.value)} />
                </div>
            </form>
        </div>
    );
};

export default Search;
