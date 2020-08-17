import { useEffect, useCallback } from "react";
import { useAppContext } from "@contexts/AppContext";

const useAdaptiveSize = (breakpoint = 720) => {
  const { state, setState } = useAppContext();
  const {
    windowIsMobile = false,
    windowIsLoading = true,
    windowIsLoaded = false,
  } = state;

  const handleWindowSizeChange = useCallback(() => {
    setState({ windowIsMobile: window.innerWidth <= breakpoint });
  }, [breakpoint, setState]);

  useEffect(() => {
    if (windowIsLoaded) {
      return;
    }
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
    setState({ windowIsLoaded: true, windowIsLoading: false });
  }, [handleWindowSizeChange, setState, windowIsLoaded]);

  return {
    mobile: windowIsMobile,
    loaded: windowIsLoaded,
    loading: windowIsLoading,
  };
};

export default useAdaptiveSize;
