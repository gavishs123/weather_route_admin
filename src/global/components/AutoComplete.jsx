// import { Listbox, Transition } from '@headlessui/react'
// import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import { Combobox } from '@headlessui/react'

const initialState = {
    textValue: null
}

const AutoCompeleteMenu = ({ onChange, options, value, placeholder, ...props }) => {

    const [selected, setSelected] = useState(initialState)
    const [query, setQuery] = useState('')

    const handleValueChange = (value) => {
        setSelected(value)
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
        }
    }, [value])

    return (
        <>

            <Combobox value={selected.value} onChange={handleValueChange} {...props}>
                <div className='flex'>
                    <Combobox.Input placeholder={placeholder} onChange={(event) => setQuery(event.target.value)} className=' rounded-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <Combobox.Options>
                    {filteredOptions?.map((item, index) => (
                        <Combobox.Option key={index} value={item.value}>
                            {item.label}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </>
    )
}

AutoCompeleteMenu.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default AutoCompeleteMenu