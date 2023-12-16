import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
const Options = () => {
    const [Selected, setSelected] = useState('All Post');
    console.log(Selected);
    const handleSelectedOption = (value) => {
        setSelected(value);
    }
    return (<>
        <div className="w-full pt-16">
            <div className="mx-auto w-full max-w-md rounded-2xl p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange px-4 py-2 text-left text-sm font-medium text-white hover:bg-orange focus:outline-none focus-visible:ring focus-visible:ring-white/75">
                                <span className='font-bold tracking-wider'>Blog Section</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-white`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                        All Post
                                    </label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('All Post')}
                                        checked={Selected === 'All Post'}
                                        className="ms-2 w-4 h-4 cursor-pointer text-orange bg-gray-100-gray-300 rounded focus:ring-orange dark:focus:ring-orange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                                    />
                                </div>
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">Cat & Kitten</label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('Cat & Kitten')}
                                        checked={Selected === 'Cat & Kitten'}
                                        className="ms-2 w-4 h-4 cursor-pointer text-orange bg-gray-100-gray-300 rounded focus:ring-orange dark:focus:ring-orange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                                    />
                                </div>
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">Dog & Puppy</label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('Dog & Puppy')}
                                        checked={Selected === 'Dog & Puppy'}
                                        className="ms-2 w-4 h-4 cursor-pointer text-orange bg-gray-100-gray-300 rounded focus:ring-orange dark:focus:ring-orange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                                    />
                                </div>
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">Questions</label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('Questions')}
                                        checked={Selected === 'Questions'}
                                        className="ms-2 w-4 h-4 cursor-pointer text-orange bg-gray-100-gray-300 rounded focus:ring-orange dark:focus:ring-orange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                                    />
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange px-4 py-2 text-left text-sm font-medium text-white hover:bg-orange focus:outline-none focus-visible:ring focus-visible:ring-white/75">
                                <span className='font-bold tracking-wider'>Adoption Section</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-white`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Adoption Post
                                    </label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('Adoption')}
                                        checked={Selected === 'Adoption'}
                                        className="ms-2 w-4 h-4 cursor-pointer text-orange bg-gray-100-gray-300 rounded focus:ring-orange dark:focus:ring-orange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                                    />
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange px-4 py-2 text-left text-sm font-medium text-white hover:bg-orange focus:outline-none focus-visible:ring focus-visible:ring-white/75">
                                <span className='font-bold tracking-wider'>Help Section</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-white`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Help Post
                                    </label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('Help')}
                                        checked={Selected === 'Help'}
                                        className="ms-2 w-4 h-4 cursor-pointer text-orange bg-gray-100-gray-300 rounded focus:ring-orange dark:focus:ring-orange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                                    />
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    </>
    );
};

export default Options;