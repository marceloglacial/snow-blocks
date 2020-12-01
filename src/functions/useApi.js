import useSWR from 'swr';
import fetcher from './fetcher';

const useApi = (type) => {
  const { data, error } = useSWR(
    `${window.location.origin}/wp-json/wp/v2/${type}`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useApi;
