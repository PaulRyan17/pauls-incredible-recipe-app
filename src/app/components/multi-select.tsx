import { FC, Fragment, useState, useRef, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

interface MultiSelectProps<T extends { toString(): string }> {
    options: T[]
    selected: T[]
    onChange: (selected: T[]) => void
    label?: string
    optionLabel?: (item: T) => string
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const MultiSelect = <T,>({
    options,
    selected,
    onChange,
    label = '',
    optionLabel = (item: T) => item.toString(),
}: MultiSelectProps<T>) => {
    const [inputValue, setInputValue] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const closeDropdown = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', closeDropdown)
        document.addEventListener('keydown', handleEscapeKey)

        return () => {
            document.removeEventListener('mousedown', closeDropdown)
            document.removeEventListener('keydown', handleEscapeKey)
        }
    }, [])

    const filteredOptions = options.filter((item) =>
        optionLabel(item).toLowerCase().includes(inputValue.toLowerCase())
    )

    const toggleSelection = (item: T) => {
        if (selected.includes(item)) {
            onChange(selected.filter((selectedItem) => selectedItem !== item))
        } else {
            onChange([...selected, item])
        }

        // Focus the input after selection
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <Listbox as="div" className="space-y-4" ref={dropdownRef}>
            {label && (
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">{label}</Listbox.Label>
            )}
            <div className="relative">
                <input
                    type="text"
                    className="w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        setIsDropdownOpen(true) // Always open the dropdown when the input value changes
                    }}
                    ref={inputRef} // Assign a ref to the input element
                />
                <Transition
                    show={isDropdownOpen}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Listbox.Options
                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        aria-multiselectable="true"
                    >
                        {filteredOptions.map((item) => (
                            <Listbox.Option key={optionLabel(item)} value={item}>
                                {({ active, selected: itemSelected }) => (
                                    <div
                                        onClick={() => toggleSelection(item)}
                                        className={classNames(
                                            active ? 'bg-indigo-100' : '',
                                            'cursor-pointer select-none relative px-4 py-2'
                                        )}
                                    >
                                        <div className="flex items-center">
                                            <span className="font-normal text-gray-900">{optionLabel(item)}</span>
                                        </div>
                                        {itemSelected && (
                                            <span
                                                className={classNames(
                                                    active ? 'text-indigo-600' : 'text-indigo-400',
                                                    'absolute inset-y-0 right-0 flex items-center pr-3'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        )}
                                    </div>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default MultiSelect
