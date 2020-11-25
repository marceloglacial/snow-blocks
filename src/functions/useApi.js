import useSWR from 'swr';
import fetcher from './fetcher';

const useApi = (type) => {
  const { data, error } = useSWR(
    `http://localhost:8080/wp-json/wp/v2/${type}`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useApi;
