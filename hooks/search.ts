import useSWR from 'swr';
import api from '@/api';

const fetcher = async (url: string) => {
    const response = await api.get(url);
    if (response.status !== 200) {
        throw new Error('An error occurred while fetching the data.');
    }
    return response.data;
};

function useSearch(queryString: string, offset) {
    // null prevents the APi from being called
    const url = queryString ? `/books/search/?query=${queryString}&offset=${offset}` : null;
    const { data, error, isLoading } = useSWR(url, fetcher);

    return {
        data,
        isLoading,
        error,
    };
}

export default useSearch;
