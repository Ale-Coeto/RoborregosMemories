import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const handleSearch = () => {
        console.log(input);
    }

    return (
        <div className='flex flex-row justify-between rounded-full bg-slate-100 px-1 max-h-18 shadow-0'>

            <button onClick={handleSearch} className='text-blue-500  font-light ml-2 rounded-md py-1 pr-1'>
                <IoSearch size={24} />
            </button>

            <input className="rounded-full p-1 w-full max-h-18 bg-slate-100 text-gray-800 focus:text-gray-900 focus:outline-none" type="text" id="search" placeholder="Search" value={input} onChange={(e) => {
                setInput(e.target.value)
            }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />

        </div>
    )
}

export default SearchBar;