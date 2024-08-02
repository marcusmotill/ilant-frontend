'use client';
import React from 'react';
import { useRef, useCallback, useLayoutEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchInputProps {
    queryString: string;
    // eslint-disable-next-line no-unused-vars
    onInputChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    queryString,
    onInputChange,
}) => {
    const [value, setValue] = useState(queryString);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.metaKey && event.key === 'k') {
            event.preventDefault();
            inputRef.current?.focus();
        }
    }, []);

    useLayoutEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const handleInput = useDebouncedCallback(() => {
        onInputChange(value);
    }, 300);

    return (
        <div>
            <label className='input input-lg input-bordered input-primary flex items-center gap-2'>
                <MagnifyingGlassIcon className='size-6' />
                <input
                    type='text'
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                        handleInput();
                    }}
                    className='grow'
                    placeholder='Search for a book...'
                    ref={inputRef}
                />
                <kbd className='kbd kbd-sm'>⌘</kbd>
                <kbd className='kbd kbd-sm'>K</kbd>
            </label>
        </div>
    );
};

export default SearchInput;
