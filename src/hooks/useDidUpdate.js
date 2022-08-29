import { useEffect, useRef } from "react";

const useDidUpdate = (cb, dependencies = []) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    // Cleanup effects when f returns a function
    return cb && cb(); //eslint-disable-line
  }, dependencies);
};

export default useDidUpdate;
