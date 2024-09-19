import { useRef, useEffect } from "react";

export default function usePrevious(val) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
}
