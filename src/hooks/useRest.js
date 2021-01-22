import useSWR from 'swr';
import fetcher from '../functions/fetcher';

const useRest = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useRest;
