import useSWR from 'swr';
import fetcher from '../functions/fetcher';

// TODO: Fix Cors for real

const useHubSpot = (id) => {
  const { data, error } = useSWR(
    `https://cors-anywhere.herokuapp.com/https://api.hubapi.com/marketing/v3/forms?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}&limit=100`,
    fetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useHubSpot;
