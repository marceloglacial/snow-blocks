import { useEffect } from 'react';
import postscribe from 'postscribe';

// TODO: Get a better way to render the script without a package

const useScript = (containerId, script) => {
  useEffect(() => {
    postscribe(`#${containerId}`, script);
  }, []);
};
export default useScript;
