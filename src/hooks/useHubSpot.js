import useSWR from 'swr';
import fetcher from '../functions/fetcher';

// TODO: Fix Cors for real

const useHubSpot = (id) => {
  const { data, error } = useSWR(
    `https://cors-anywhere.herokuapp.com/https://api.hubapi.com/marketing/v3/forms?hapikey=ee9db022-28b7-4daa-85ba-4fa92a26a06b&limit=100`,
    fetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useHubSpot;
