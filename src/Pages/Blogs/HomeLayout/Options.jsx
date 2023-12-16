import React, { useState } from 'react';

const Options = () => {
    const [SearchTerm, setSearchTerm] = useState('');
    console.log(SearchTerm);
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className="flex items-center justify-start w-full mb-4">
                <label htmlFor="default-checkbox" className="text-lg underline uppercase font-bold  text-gray-900 dark:text-gray-300">Options</label>
            </div>
            <div className="flex items-center justify-start w-full mb-4">
                <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                All Post
                </label>
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    id="default-checkbox"
                    type="checkbox"
                    value="All Post"
                    className="ms-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                />
            </div>

            <div className="flex items-center justify-start w-full mb-4">
                <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">Cat & Kitten</label>
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    id="default-checkbox"
                    type="checkbox"
                    value="Cat & Kitten"
                    className="ms-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                />
            </div>
            <div className="flex items-center justify-start w-full mb-4">
                <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">Dog & Puppy</label>
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    id="default-checkbox"
                    type="checkbox"
                    value="Dog & Puppy"
                    className="ms-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                />
            </div>
            <div className="flex items-center justify-start w-full mb-4">
                <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">Questions</label>
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    id="default-checkbox"
                    type="checkbox"
                    value="Questions"
                    className="ms-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                />
            </div>
        </div>
    );
};

export default Options;