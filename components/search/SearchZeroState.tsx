'use client';
import React from 'react';

const SearchZeroState: React.FC = () => {
    return (
        <div className='hero grow'>
            <div className='hero-content text-center'>
                <div className='max-w-md'>
                    <h1 className='text-5xl font-bold'>Howdy 🤠!</h1>
                    <p className='py-6'>
                        This is a simple book search app built with Next.js and
                        Tailwind CSS.
                        <br />
                        <br />
                        Start searching for your favorite books by typing in the
                        search bar above or by using the keyboard shortcut{' '}
                        <kbd className='kbd kbd-sm'>⌘</kbd>
                        <kbd className='kbd kbd-sm'>K</kbd>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SearchZeroState;
