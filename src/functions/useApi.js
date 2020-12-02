import useSWR from 'swr';
import fetcher from './fetcher';

const useApi = (type, categories) => {
  const { data, error } = useSWR(
    `${
      window.location.origin
    }/wp-json/wp/v2/${type}?categories=${categories.map((item) => item)}`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useApi;
