'use client';

import { useState } from 'react';

import SearchInput from '@/components/search/SearchInput';
import SearchResults from '@/components/search/SearchResults';

import useSearch from '@/hooks/search';
import SearchPagination from '@/components/search/SearchPagination';
import SearchLoading from '@/components/search/SearchLoading';
import SearchZeroState from '@/components/search/SearchZeroState';

export default function Search() {
    const [currentPage, setCurrentPage] = useState(1);
    const [queryString, setQueryString] = useState('');
    const { data, isLoading } = useSearch(
        queryString,
        // Calculate the offset based on the current page
        (currentPage - 1) * 10
    );

    return (
        <div className='flex h-full min-h-0 flex-col gap-6 px-6 pt-10'>
            <SearchInput
                queryString={queryString}
                onInputChange={setQueryString}
            />
            {isLoading && <SearchLoading />}
            {!isLoading && data && <SearchResults data={data?.results} />}
            {!isLoading && !data && <SearchZeroState />}
            {data && (
                <SearchPagination
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
}
