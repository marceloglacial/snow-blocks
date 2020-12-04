import useSWR from 'swr';
import fetcher from './fetcher';

const useCategory = (id) => {
  const { data, error } = useSWR(
    `${window.location.origin}/wp-json/wp/v2/categories/${id || ''}`,
    fetcher
  );
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useCategory;
