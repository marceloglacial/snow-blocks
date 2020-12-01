import useSWR from 'swr';
import fetcher from './fetcher';

const useMedia = (id) => {
  const { data, error } = useSWR(
    `http://localhost:8888/wp-json/wp/v2/media/${id}`,
    fetcher
  );
  return {
    media: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useMedia;
