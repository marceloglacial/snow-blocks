import useSWR from 'swr';
import fetcher from './fetcher';

const useApi = (type, categories) => {
  const hasCategories =
    categories.length !== 0
      ? `?categories=${categories.map((item) => item)}`
      : '';
  const { data, error } = useSWR(
    `${window.location.origin}/wp-json/wp/v2/${type}${hasCategories}`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useApi;
