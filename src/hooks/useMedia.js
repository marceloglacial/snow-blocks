import useSWR from 'swr';
import fetcher from '../functions/fetcher';

const useMedia = (id) => {
  const { data, error } = useSWR(
    `${window.location.origin}/wp-json/wp/v2/media/${id}`,
    fetcher
  );
  return {
    media: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useMedia;
