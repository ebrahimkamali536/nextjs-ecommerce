import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

const SearchForm = () => {
    return (
        <div className='hidden md:flex w-[650px] items-center border-primary-700 border-2 rounded-lg px-4'>
            <input className='w-full py-1.5 bg-transparent outline-none' type="text" placeholder='Search ...' />
            <MagnifyingGlassIcon className='w-6 h-6' />
        </div>
    );
};

export default SearchForm;