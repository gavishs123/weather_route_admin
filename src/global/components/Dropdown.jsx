import PropTypes from 'prop-types';
import { Listbox, Transition } from '@headlessui/react'
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const initialvalue = {
    label: "Select",
    value: null
}

const Dropdown = ({ onChange, options, value, ...props }) => {
    const [selected, setSelected] = useState(initialvalue)

    const handleValueChange = (value) => {
        let selectedObj = options?.filter((item) => item.value === value)[0]
        onChange(selectedObj.value, selectedObj.label)
        setSelected(selectedObj)
    }

    useEffect(() => {
        if (value) {
            let selectedObj = options?.filter((item) => item.value === value)[0]
            setSelected(selectedObj)
        } else {
            setSelected(initialvalue)
        }
    }, [options, value])

    return (<>
        <Listbox value={selected.value} onChange={handleValueChange} {...props}>
            <div className="relative mt-1">
                <Listbox.Button className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-start">
                    <span className="block truncate">{selected.label}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="h-4 w-4 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {/* <Listbox.Option
                            className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                                }`
                            }
                            value={null}
                        >
                            {({ selected }) => (
                                <>
                                    <span
                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                            }`}
                                    >
                                        Selectzdsf
                                    </span>
                                    {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                            <FontAwesomeIcon icon={faCheck} className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                </>
                            )}
                        </Listbox.Option> */}

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
        </Listbox>
    </>
    )
}

Dropdown.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default Dropdown