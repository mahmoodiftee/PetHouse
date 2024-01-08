import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useCustomHook } from '../../../Providers/CategoryProvider';
const Options = () => {
    const { setSelected, Selected } = useCustomHook();
    const handleSelectedOption = (value) => {
        setSelected(value);
    }
    return (<>
        <div className="w-full pt-6">
            <div className="mx-auto w-full max-w-md rounded-2xl p-2">
            <div className="rounded-lg w-full bg-[#202020] border-2 border-[#2c2c2c] px-4 mb-2 py-2 text-left text-sm font-medium text-orange hover:bg-[#202020] focus:outline-none focus-visible:ring focus-visible:ring-white/75">Select Category</div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#202020] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#202020] focus:outline-none focus-visible:ring focus-visible:ring-white/75">
                                <span className='font-bold tracking-wider'>Blog Section</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-white`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-white">
                                        All Post
                                    </label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('all')}
                                        checked={Selected === 'all'}
                                        className="ms-2 w-4 h-4 cursor-pointer text-orange bg-gray-100-gray-300 rounded focus:ring-orange dark:focus:ring-orange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                                    />
                                </div>
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-white">Cat & Kitten</label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('cat')}
                                        checked={Selected === 'cat'}
                                        className="ms-2 w-4 h-4 cursor-pointer text-orange bg-gray-100-gray-300 rounded focus:ring-orange dark:focus:ring-orange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                                    />
                                </div>
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-white">Dog & Puppy</label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('dog')}
                                        checked={Selected === 'dog'}
                                        className="ms-2 w-4 h-4 cursor-pointer text-orange bg-gray-100-gray-300 rounded focus:ring-orange dark:focus:ring-orange dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark-gray-600"
                                    />
                                </div>
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-white">Questions</label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('question')}
                                        checked={Selected === 'question]'}
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
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#202020] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#202020] focus:outline-none focus-visible:ring focus-visible:ring-white/75">
                                <span className='font-bold tracking-wider'>Adoption Section</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-white`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-white">
                                        Adoption Post
                                    </label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('adoption')}
                                        checked={Selected === 'adoption'}
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
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#202020] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#202020] focus:outline-none focus-visible:ring focus-visible:ring-white/75">
                                <span className='font-bold tracking-wider'>Help Section</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-white`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                <div className="flex items-center justify-start mb-4">
                                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-white">
                                        Help Post
                                    </label>
                                    <input
                                        type='radio'
                                        onChange={() => handleSelectedOption('help')}
                                        checked={Selected === 'help'}
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