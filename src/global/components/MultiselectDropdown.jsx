// import { Listbox, Transition } from '@headlessui/react'
// import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import { Combobox } from '@headlessui/react'

const initialState = {
    label: "Select",
    value: null
}

const MultiselectDropdown = ({ onChange, options, value, ...props }) => {

    const [selected, setSelected] = useState(initialState)
    const [addedValues, setAddedValues] = useState([])
    const [query, setQuery] = useState('')

    const handleValueChange = (value) => {
        let selectedObj = options?.filter((item) => item.value === value)[0]
        setSelected(selectedObj)
    }

    const handleAddValue = (e) => {
        e.preventDefault()
        if (selected.value === null)
            return
        if (addedValues?.some((item) => item.label === selected.label && item.value === selected.value))
            return

        const tmpValues = [...addedValues, { ...selected }]
        setAddedValues(tmpValues)
        setSelected(initialState)
        onChange(tmpValues)
    }

    const deleteValue = (id, value) => {
        let tmpValues = addedValues?.filter((item, index) => !(item.value === value && index === id))
        setAddedValues(tmpValues)
        onChange(tmpValues)
    }

    const filteredOptions = useMemo(() => {
        return query === ''
            ? options
            : options.filter((item) => {
                return item?.label?.toLowerCase().includes(query.toLowerCase())
            })
    }, [options, query])

    useEffect(() => {
        if (!value || value?.length === 0) {
            setSelected(initialState)
            setAddedValues([])
        }
    }, [value])

    return (
        <>
            <Combobox value={selected.value} onChange={handleValueChange} {...props}>
                <div className='flex'>
                    <Combobox.Input onChange={(event) => setQuery(event.target.value)} className=' rounded-e-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    <button
                        className='bg-gray-50 border border-gray-300 text-gray-900  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-start rounded-s-none'
                        onClick={handleAddValue}
                    >Add
                    </button>
                </div>
                <Combobox.Options>
                    {filteredOptions?.map((item, index) => (
                        <Combobox.Option key={index} value={item.value}>
                            {item.label}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
                {addedValues?.map((item, index) => {
                    return (
                        <div className='mt-2' key={index}>
                            <div className='bg-white hover:bg-[#f3f3f38c] p-2 py-1 text-sm rounded-md	flex justify-between items-center gap-2 border'>
                                <span>{item.label}</span>
                                <span className='cursor-pointer	 hover:scale-110' onClick={() => deleteValue(index, item.value)}>
                                    <FontAwesomeIcon icon={faXmark} className="h-5 w-5" aria-hidden="true" />
                                </span>
                            </div>
                        </div>
                    )
                })}
            </Combobox>
        </>
    )
}

MultiselectDropdown.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.array,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default MultiselectDropdown


{/* <Listbox value={selected.value} onChange={handleValueChange} {...props}>
                <div className="relative mt-1 flex items-center">
                    <Listbox.Button className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-start rounded-e-none">
                        <span className="block truncate">{selected.label}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 right-16	">
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="h-4 w-4 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <button
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-start rounded-s-none'
                        onClick={handleAddValue}
                    >Add</button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {options?.map((item, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={item.value}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {item.label}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                                    <FontAwesomeIcon icon={faCheck} className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
                {addedValues?.map((item, index) => {
                    return (
                        <div className='mt-2' key={index}>
                            <div className='bg-white hover:bg-[#f3f3f38c] p-2 py-1 text-sm rounded-md	flex justify-between items-center gap-2 border'>
                                <span>{item.label}</span>
                                <span className='cursor-pointer	 hover:scale-110' onClick={() => deleteValue(index, item.value)}>
                                    <FontAwesomeIcon icon={faXmark} className="h-5 w-5" aria-hidden="true" />
                                </span>
                            </div>
                        </div>
                    )
                })}
            </Listbox > */}