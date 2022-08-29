import { useEffect } from "react";

const useWillUnmount = (cb) => useEffect(() => () => cb && cb(), []);

export default useWillUnmount;
