'use client';
import React from 'react';
import Image from 'next/image';

interface SearchResultsProps {
    data: {
        id: string;
        title: string;
        authors: string[];
        description: string;
        thumbnail: string;
    }[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ data }) => {
    return (
        <div className='grow overflow-y-scroll'>
            <div className='grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
                {data?.map((book, index) => (
                    <a
                        key={index}
                        className='card card-compact transition-all duration-200 hover:-translate-y-1 hover:bg-base-200'
                    >
                        <figure className='px-4 pt-4'>
                            {book.thumbnail ? (
                                <Image
                                    src={book.thumbnail}
                                    width={100}
                                    height={100}
                                    alt='Book thumbnail'
                                />
                            ) : (
                                <div
                                    className='artboard rounded-box bg-base-200'
                                    style={{ height: '100px', width: '100px' }}
                                ></div>
                            )}
                        </figure>
                        <div className='card-body'>
                            <h3 className='card-title'>{book.title}</h3>
                            <p className='text-xs opacity-60'>
                                {book.authors.join(', ')}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
